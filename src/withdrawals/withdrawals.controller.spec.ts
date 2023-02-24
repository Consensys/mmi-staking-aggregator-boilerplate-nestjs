import { Test, TestingModule } from '@nestjs/testing'
import { WithdrawalsController } from './withdrawals.controller'

describe('WithdrawalsController', () => {
  let controller: WithdrawalsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawalsController],
    }).compile()

    controller = module.get<WithdrawalsController>(WithdrawalsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
