import { Module } from '@nestjs/common'
import { WithdrawalsController } from './withdrawals.controller'

@Module({
  controllers: [WithdrawalsController],
})
export class WithdrawalsModule {}
