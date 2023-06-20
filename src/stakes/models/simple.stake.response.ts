import { ApiProperty } from '@nestjs/swagger'
import { ApiPropertyEth1Address } from '../../api-properties'
import { ChainDepositConfiguration } from './chain.deposit.configuration'
import { DepositData } from './deposit.data'
import { Eth1Address } from './eth1.address'

export class SimpleStakeResponse {
  @ApiProperty({
    name: 'chain_deposit_configuration',
    type: ChainDepositConfiguration,
    description: 'Ethereum 1 chain configuration to send deposit.',
    required: true,
  })
  chain_deposit_configuration: ChainDepositConfiguration

  @ApiProperty({
    name: 'stake',
    type: DepositData,
    required: true,
  })
  stake: DepositData

  @ApiPropertyEth1Address()
  fee_recipient: Eth1Address
}
