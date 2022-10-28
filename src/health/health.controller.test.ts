import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus'
import { Test, TestingModule } from '@nestjs/testing'
import { HealthController } from './health.controller'

describe('HealthController', () => {
  let controller: HealthController
  let healthCheckService: HealthCheckService
  let httpHealthIndicator: HttpHealthIndicator

  beforeEach(async () => {
    const healthCheckServiceMock = {
      provide: HealthCheckService,
      useValue: {
        check: jest.fn().mockImplementation((healthChecks) => {
          healthChecks.forEach((healthCheck) => healthCheck.call())
        }),
      },
    }

    const httpHealthIndicatorMock = {
      provide: HttpHealthIndicator,
      useValue: {
        pingCheck: jest.fn().mockImplementation((key) => {
          return {
            [key]: {
              status: 'ok',
            },
          }
        }),
      },
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [healthCheckServiceMock, httpHealthIndicatorMock],
    }).compile()

    controller = module.get<HealthController>(HealthController)
    healthCheckService = module.get<HealthCheckService>(HealthCheckService)
    httpHealthIndicator = module.get<HttpHealthIndicator>(HttpHealthIndicator)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('check', () => {
    it('should check if Google is up', async () => {
      const pingCheck = jest.spyOn(httpHealthIndicator, 'pingCheck')
      const healthCheck = jest.spyOn(healthCheckService, 'check')

      await controller.check()

      expect(healthCheck).toHaveBeenCalled()
      expect(pingCheck.mock.calls[0]).toMatchObject([
        'YourService',
        'https://your.service',
      ])
      expect(pingCheck.mock.calls[1]).toMatchObject([
        'YourOtherService',
        'https://your.other.service',
      ])
    })
  })
})
