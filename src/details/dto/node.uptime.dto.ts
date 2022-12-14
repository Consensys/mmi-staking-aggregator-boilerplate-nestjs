import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsNumber, Max, Min } from 'class-validator'

export class NodeUptimeDto {
  @ApiProperty({
    description:
      "The number of epochs in the `last day` the validator's attestation was included on-chain, divided by the number of epochs that validator is active (in %). Equivalent to the rate of included attestations.",
    example: 93.2,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1D': number

  @ApiProperty({
    description: 'Over the `last week.`',
    example: 96.9,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1W': number

  @ApiProperty({
    description: 'Over the `last month.`',
    example: 95,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1M': number

  @ApiProperty({
    description: 'Over the `last year.`',
    example: 92.1,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1Y': number
}
