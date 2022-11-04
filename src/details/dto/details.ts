import { ApiProperty } from '@nestjs/swagger'

export class Details {
  @ApiProperty({
    name: 'estimatedGrossRewards',
    type: 'number',
    minimum: 0,
    maximum: 1,
    example: 0.056,
    description:
      'The current estimated rewards percentage you will pay before fees and penalties.',
  })
  estimatedGrossRewards: number

  @ApiProperty({
    name: 'fees',
    type: 'number',
    minimum: 0,
    maximum: 1,
    example: 0.05,
    description:
      'The fee, as percentage, on the staking rewards/earning which you charge as a staking provider.',
  })
  fees: number

  @ApiProperty({
    name: 'tvl',
    type: 'number',
    example: 7060624149.296207,
    description:
      'The current Total Value Locked in your validator nodes, in `dollars`.',
  })
  tvl: number

  @ApiProperty({
    name: 'nodeUptime',
    type: 'number',
    minimum: 0,
    maximum: 1,
    example: 0.9995,
    description: '`TODO TBC` Percentage of successful attestations.',
  })
  nodeUptime: number

  @ApiProperty({
    name: 'slashingProtection',
    type: 'boolean',
    example: true,
    description:
      'Whether you provide insurance, protection or refunds if the validator is slashed.',
  })
  slashingProtection: boolean

  @ApiProperty({
    name: 'estimatedValidationActivationDelay',
    type: 'string',
    example: '3600',
    description:
      '`TODO TBC` An estimated delay in seconds before the validator activates.',
  })
  estimatedValidationActivationDelay: string
}
