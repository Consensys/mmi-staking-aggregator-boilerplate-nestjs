import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDefined, IsNumber, Max, Min } from 'class-validator'
import { EstimatedGrossRewardsRateDto } from './estimated.gross.rewards.rate.dto'
import { NodeUptimeDto } from './node.uptime.dto'

export class Details {
  estimatedGrossRewardsRate: EstimatedGrossRewardsRateDto

  @ApiProperty({
    description:
      "The staking provider's operator fee rate (%), charged based on a percentage of staking rewards.",
    minimum: 0,
    maximum: 100,
    example: 5,
    required: true,
  })
  @Min(0)
  @Max(100)
  @IsNumber()
  @IsDefined()
  fees: number

  @ApiProperty({
    description:
      "TVL is the sum of the validators balances that are not subject to NDA constraints. It is the amount of ETH in the operator's public validators. It includes initial 32ETH deposit + Consensus Layer rewards.",
    minimum: 0,
    example: 7060624149.296207,
    required: true,
  })
  @Min(0)
  @IsNumber()
  @IsDefined()
  tvl: number

  nodeUptime: NodeUptimeDto

  @ApiProperty({
    description:
      'Whether the staking provider provides an Integrity Rebate or not. The balance of the Validator that has undergone the Slashing Event will be captured immediately prior to the Slashing Event, and again at the point in time the Validator enters the withdrawable state. The Integrity Rebate will be the difference between the two aforementioned balances.',
    example: true,
    required: true,
  })
  @IsBoolean()
  @IsDefined()
  integrityRebate: boolean

  @ApiProperty({
    description:
      'Whether the staking provider provides an Availability Rebate or not. In the event Node Operator (Partner) does not meet the applicable Availability Commitment, Client is eligible to receive a rebate (the “Availability Rebate”), except that the Availability Rebate does not apply to any Validator to which the Integrity Rebate already applies. The Availability Rebate will be calculated as the difference between (i) the Staking Reward actually earned by the Validators that are due the Availability Rebate and (ii) the Staking Reward that such Validators would have earned if the Availability Commitment (which corresponds, for the purposes of this Section, to Monthly Uptime Percentage equal to (but not greater than) 99.5%) was met at the relevant time.',
    example: false,
    required: true,
  })
  @IsBoolean()
  @IsDefined()
  availabilityRebate: boolean
}
