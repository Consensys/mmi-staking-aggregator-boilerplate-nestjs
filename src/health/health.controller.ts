import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  HealthCheckResult as IHealthCheckResult,
} from '@nestjs/terminus'

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  @ApiOperation({
    summary: "Get system's Health",
    description:
      "Heartbeat endpoint. The Staking Aggregator polls it every 10 seconds to get information about your system's health. The Portfolio Dashboard prevents users from staking with providers currently unhealthy.",
  })
  check(): Promise<IHealthCheckResult> {
    // TODO Implement me!
    return this.health.check([
      () => this.http.pingCheck('YourService', 'https://your.service'),
      () =>
        this.http.pingCheck('YourOtherService', 'https://your.other.service'),
    ])
  }
}
