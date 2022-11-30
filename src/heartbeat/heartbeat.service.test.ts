import { HttpService } from '@nestjs/axios'
import { CacheModule } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { of } from 'rxjs'
import { HeartbeatService } from './heartbeat.service'

const MOCKER_BEARER_TOKEN_RESPONSE = of({
  data: { access_token: 'eyXXX', expires_in: 435 },
} as any)

describe('HeartbeatService', () => {
  let service: HeartbeatService
  let httpService: HttpService

  beforeEach(async () => {
    const configServiceMock = {
      provide: ConfigService,
      useValue: {
        get: jest.fn((key) => {
          switch (key) {
            case 'MMI_STAKING_API_URL':
              return 'https://some.url'
            default:
              return 'something'
          }
        }),
      },
    }

    const httpServiceMock = {
      provide: HttpService,
      useValue: {
        post: jest.fn(() => of({} as any)),
      },
    }

    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register()],
      providers: [HeartbeatService, configServiceMock, httpServiceMock],
    }).compile()

    service = module.get<HeartbeatService>(HeartbeatService)
    httpService = module.get<HttpService>(HttpService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getBearerToken', () => {
    it('should fetch a bearer token', (done) => {
      const spy = jest
        .spyOn(httpService, 'post')
        .mockReturnValue(MOCKER_BEARER_TOKEN_RESPONSE)
      service.getBearerToken().subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1)
        done()
      })
    })
  })

  describe('sendHeartbeat', () => {
    it('should fetch a bearer token then send a heartbeat', async () => {
      const spy = jest
        .spyOn(httpService, 'post')
        .mockReturnValueOnce(MOCKER_BEARER_TOKEN_RESPONSE)
        .mockReturnValueOnce(of(null))

      await service.sendHeartbeat()
      expect(spy).toHaveBeenCalledTimes(2)
    })
  })
})
