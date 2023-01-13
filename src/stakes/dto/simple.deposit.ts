import { ApiProperty } from '@nestjs/swagger'
import { Eth1Address } from './eth1.address'
import { Gwei } from './gwei'
import { PublicKey } from './public.key'

export class SimpleDeposit {
  @ApiProperty({
    name: 'withdrawal_pubkey',
    type: PublicKey,
    pattern: '^(0x[a-fA-F0-9]{96})|(0x[a-fA-F0-9]{40})$',
    example:
      '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
    description:
      'Unique validator BLS public key: 48-bytes, hex-encoded, optional 0x prefix, case insensitive. Alternatively, 20-bytes with same spec.',
    required: true,
  })
  withdrawal_pubkey: PublicKey

  @ApiProperty({
    name: 'amount',
    type: Gwei,
    pattern: '^[0-9]+$',
    example: '"32000000000"',
    required: true,
  })
  amount: Gwei

  @ApiProperty({
    name: 'fee_recipient',
    type: Eth1Address,
    pattern: '^0x[a-fA-F0-9]{40}$',
    example: '0x93247f2209abcacf57b75a51dafae777f9dd38bc',
    description:
      'An ethereum 1 address, uniquely identifying them. 20-bytes, hex encoded with 0x prefix, case insensitive.',
    required: true,
  })
  fee_recipient: Eth1Address
}
