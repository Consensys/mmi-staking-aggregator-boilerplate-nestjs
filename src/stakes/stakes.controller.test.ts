import { Test, TestingModule } from '@nestjs/testing'
import { StakesController } from './stakes.controller'

describe('StakesController', () => {
  let controller: StakesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StakesController],
    }).compile()

    controller = module.get<StakesController>(StakesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
