import { ApiProperty } from '@nestjs/swagger'

export class VoluntaryExit {
  @ApiProperty({
    name: 'epoch',
    description: 'Minimum epoch for processing exit.',
    example: '18446744073709551615',
  })
  epoch: string

  @ApiProperty({
    name: 'validator_index',
    description: 'Index of the exiting validator.',
    example: '100',
  })
  validator_index: string
}
