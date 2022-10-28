import { ApiProperty } from '@nestjs/swagger'
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

  @ApiProperty({
    name: 'fee_recipient',
    type: Eth1Address,
    pattern: '^0x[a-fA-F0-9]{40}$',
    example: '0x93247f2209abcacf57b75a51dafae777f9dd38bc',
    description:
      'An ethereum 1 address, uniquely identifying them. 20-bytes, hex encoded with 0x prefix, case insensitive.',
  })
  fee_recipient: Eth1Address
}
