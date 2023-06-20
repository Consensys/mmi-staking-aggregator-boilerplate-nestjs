import { ApiProperty } from '@nestjs/swagger'
import { Gwei } from './gwei'
import { PublicKey } from './public.key'
import { Root } from './root'
import { Signature } from './signature'

export class DepositData {
  @ApiProperty({
    name: 'pubkey',
    type: PublicKey,
    pattern: '^(0x[a-fA-F0-9]{96})|(0x[a-fA-F0-9]{40})$',
    example:
      '0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a',
    description:
      'Unique validator BLS public key: 48-bytes, hex-encoded, optional 0x prefix, case insensitive. Alternatively, 20-bytes with same spec.',
    required: true,
  })
  pubkey: PublicKey

  @ApiProperty({
    name: 'withdrawal_credentials',
    type: Root,
    example: 'string',
    pattern: '^0x[a-fA-F0-9]{64}$',
    required: true,
  })
  withdrawal_credentials: Root

  @ApiProperty({
    name: 'amount',
    type: Gwei,
    example: '"32000000000"',
    pattern: '^[0-9]+$',
    required: true,
  })
  amount: Gwei

  @ApiProperty({
    name: 'signature',
    type: Signature,
    example:
      '0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505',
    pattern: '^0x[a-fA-F0-9]{192}$',
    required: true,
  })
  signature: Signature

  @ApiProperty({
    name: 'deposit_root',
    type: Root,
    example: 'string',
    pattern: '^0x[a-fA-F0-9]{64}$',
    required: true,
  })
  deposit_root: Root

  @ApiProperty({
    name: 'deposit_message_root',
    type: Root,
    example: 'string',
    pattern: '^0x[a-fA-F0-9]{64}$',
    required: true,
  })
  deposit_message_root: Root

  @ApiProperty({
    name: 'hex',
    type: 'string',
    pattern: '^0x[a-fA-F0-9]{2,}$',
    example: 'string',
    description: 'Hex encoded input data for deposit transaction',
    required: true,
  })
  hex: string
}
