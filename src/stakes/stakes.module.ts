import { Module } from '@nestjs/common'
import { StakesController } from './stakes.controller'

@Module({
  controllers: [StakesController],
})
export class StakesModule {}
