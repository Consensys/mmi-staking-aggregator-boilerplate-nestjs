import { ApiProperty } from '@nestjs/swagger'
import { Eth1Address } from './eth1.address'

export class ChainDepositConfiguration {
  @ApiProperty({
    name: 'eth1_contract_address',
    type: 'Eth1Address',
    example: '0x93247f2209abcacf57b75a51dafae777f9dd38bc',
    description:
      'The current estimated rewards percentage you will pay before fees and penalties.',
  })
  eth1_contract_address: Eth1Address

  @ApiProperty({
    name: 'chain_id',
    type: 'string',
    example: '18446744073709551615',
    description: 'Chain ID of the ethereum network to send deposit.',
  })
  chain_id: string

  @ApiProperty({
    name: 'network_id',
    type: 'string',
    example: '18446744073709551615',
    description: 'Network ID of the ethereum network to send deposit.',
  })
  network_id: string
}
