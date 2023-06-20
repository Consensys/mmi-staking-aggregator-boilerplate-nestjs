import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, Matches } from 'class-validator'
import { ApiPropertyEth1Address } from '../../api-properties'
import Regexes from '../../regexes'
import { Gwei } from './gwei'

export class SimpleDeposit {
  @ApiProperty({
    pattern: Regexes.ETH1_ADDRESS.toString(),
    example: '0x93247f2209abcacf57b75a51dafae777f9dd38bc',
    description:
      'An Ethereum 1 address. MetaMask Institutional enforces "type 1" withdrawal credentials (based upon an Ethereum execution address), and prevents "type 0" withdrawal credentials (based upon a BLS private key). 20-bytes, hex encoded with 0x prefix, case insensitive.',
    required: true,
  })
  @Matches(Regexes.ETH1_ADDRESS)
  @IsDefined()
  withdrawal_pubkey: string

  @ApiProperty({
    name: 'amount',
    type: Gwei,
    pattern: '^[0-9]+$',
    example: '"32000000000"',
    required: true,
  })
  @IsDefined()
  amount: Gwei

  @ApiPropertyEth1Address()
  @Matches(Regexes.ETH1_ADDRESS)
  @IsDefined()
  fee_recipient: string
}
