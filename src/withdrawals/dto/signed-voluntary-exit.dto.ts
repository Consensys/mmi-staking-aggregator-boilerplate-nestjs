import { ApiProperty } from '@nestjs/swagger'
import { VoluntaryExit } from './voluntary-exit.dto'

export class SignedVoluntaryExit {
  @ApiProperty({
    name: 'message',
    description:
      'The [`VoluntaryExit`](https://github.com/ethereum/consensus-specs/blob/v0.11.1/specs/phase0/beacon-chain.md#voluntaryexit) object from the Eth2.0 spec.',
  })
  message: VoluntaryExit

  @ApiProperty({
    name: 'signature',
    pattern: '^0x[a-fA-F0-9]{192}$',
    example:
      '0x1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505cc411d61252fb6cb3fa0017b679f8bb2305b26a285fa2737f175668d0dff91cc1b66ac1fb663c9bc59509846d6ec05345bd908eda73e670af888da41af171505',
  })
  signature: string
}
