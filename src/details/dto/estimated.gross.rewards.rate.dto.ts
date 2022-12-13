import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsNumber, Max, Min } from 'class-validator'

export class EstimatedGrossRewardsRateDto {
  @ApiProperty({
    description: `<p>Estimated Gross Rewards Rate = rewardsTotal / totalDeposited. It is calculated as the historic validator APR (%) over 1 day:</p>
            <ul>
            <li>rewardsTotal is the sum of all rewards accrued by a validator, including attestations, block proposals and MEV</li>
            <li>totalDeposited is the amount of ETH the stakers deposit when activating validator(s). It does not account for the rewards, slashing or penalties</li>
            </ul>
          `,
    minimum: 0,
    maximum: 100,
    example: 0.0137,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1D': number

  @ApiProperty({
    description: 'Over `1 week.`',
    minimum: 0,
    maximum: 100,
    example: 0.0961,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1W': number

  @ApiProperty({
    description: 'Over `1 month.`',
    minimum: 0,
    maximum: 100,
    example: 0.4166,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1M': number

  @ApiProperty({
    description: 'Over `1 year.`',
    minimum: 0,
    maximum: 100,
    example: 5,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  '1Y': number
}
