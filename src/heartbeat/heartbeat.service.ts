import { HttpService } from '@nestjs/axios'
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Cron, CronExpression } from '@nestjs/schedule'
import {
  catchError,
  from,
  lastValueFrom,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs'
import { Cache } from 'cache-manager'

@Injectable()
export class HeartbeatService {
  private readonly logger = new Logger(HeartbeatService.name)

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async onModuleInit() {
    this.sendHeartbeat()
  }

  @Cron(CronExpression.EVERY_MINUTE)
  public async sendHeartbeat() {
    this.logger.log('🩺 Sending heartbeat to MMI Staking')

    const bearerToken$ = this.getBearerToken()

    const mmiStakingApiUrl = this.configService.get('MMI_STAKING_API_URL')
    const connectorName = this.configService.get('CONNECTOR_NAME')
    const connectorDisplayName = this.configService.get(
      'CONNECTOR_DISPLAY_NAME',
    )
    const connectorEnv = this.configService.get('CONNECTOR_ENV')
    const connectorBaseUrl = this.configService.get('CONNECTOR_BASE_URL')
    const connectorChainId = this.configService.get('CONNECTOR_CHAIN_ID')

    const obs$ = bearerToken$.pipe(
      // Once the bearerToken$ observable completes...
      switchMap((bearerToken) =>
        this.httpService.post(
          `${mmiStakingApiUrl}/heartbeat`,
          {
            name: connectorName,
            displayName: connectorDisplayName,
            env: connectorEnv,
            baseUrl: connectorBaseUrl,
            chainId: connectorChainId,
          },
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          },
        ),
      ),
      catchError((error) => {
        this.logger.error(error)
        throw new Error(error)
      }),
    )
    await lastValueFrom(obs$)
  }

  /**
   * Authenticate against Codefi Staking's Auth0 tenant.
   */
  public getBearerToken(): Observable<string> {
    // Fetch the token from cache, and convert the resulting Promise to an Observable for convenience
    const tokenFromCache$ = from(
      this.cacheManager.get('MMI_STAKING_BEARER_TOKEN'),
    ) as Observable<string>

    const mmiStakingRegisterIssuerUrl = this.configService.get(
      'MMI_STAKING_REGISTER_ISSUER_URL',
    )
    const mmiStakingRegisterAudience = this.configService.get(
      'MMI_STAKING_REGISTER_AUDIENCE',
    )
    const mmiStakingRegisterClientId = this.configService.get(
      'MMI_STAKING_REGISTER_CLIENT_ID',
    )
    const mmiStakingRegisterClientSecret = this.configService.get(
      'MMI_STAKING_REGISTER_CLIENT_SECRET',
    )

    return tokenFromCache$.pipe(
      mergeMap(
        // Once the tokenFromCache$ observable completes...
        (tokenFromCache) =>
          tokenFromCache
            ? of(tokenFromCache) // Return the token if it was found in the cache
            : this.httpService // Otherwise fetch it
                .post(`${mmiStakingRegisterIssuerUrl}oauth/token`, {
                  audience: mmiStakingRegisterAudience,
                  client_id: mmiStakingRegisterClientId,
                  client_secret: mmiStakingRegisterClientSecret,
                  grant_type: 'client_credentials',
                })
                .pipe(
                  map((response) => response.data),
                  tap((data) =>
                    // Store the token in the cache. This call is async but we don't need to wait for it to complete
                    this.cacheManager.set(
                      'MMI_STAKING_BEARER_TOKEN',
                      data.access_token,
                      data.expires_in,
                    ),
                  ),
                  map((data) => data.access_token as string),
                ),
      ),
    )
  }
}
