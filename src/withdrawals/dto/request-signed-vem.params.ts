import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, Matches } from 'class-validator'

export class RequestSignedVemParams {
  @Matches(/^0x[a-fA-F0-9]{96}$/)
  @IsDefined()
  @ApiProperty({
    description:
      'Unique validator BLS public key: 48-bytes, hex-encoded, optional 0x prefix, case insensitive.',
    example:
      '0xb5bc96b70df0dfcc252c9ff0d1b42cb6dc0d55f8defa474dc0a5c7e0402c241e2850fea9c582e276b638b3c2c3a5ec55',
    pattern: '^0x[a-fA-F0-9]{96}$',
  })
  valPubKey: string
}
