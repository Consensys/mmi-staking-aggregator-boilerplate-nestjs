import { ApiProperty } from '@nestjs/swagger'
import { SignedVoluntaryExit } from './signed-voluntary-exit.dto'

export class VoluntaryExitMessage {
  @ApiProperty({
    name: 'exit_transaction',
    description:
      'The [`SignedVoluntaryExit`](https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.md#signedvoluntaryexit) object from the Eth2.0 spec.',
    required: true,
  })
  exit_transaction: SignedVoluntaryExit

  @ApiProperty({
    name: 'fork_version',
    pattern: '^0x[a-fA-F0-9]{8}$',
    example: '0x00000000',
    description:
      'The [Fork Version](https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.md#custom-types) used to sign the voluntary exit message.',
    required: true,
  })
  fork_version: string
}
