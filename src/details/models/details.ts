import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDefined, IsNumber, Max, Min } from 'class-validator'

export class Details {
  @ApiProperty({
    description: `The three tiers of operator fee rate (%), charged based on a percentage of staking rewards. The rewards of each validator a MMI user has with a Staking Provider get taxed depending on their **total staking position with this Staking Provider**:
                        <ul>
                          <li>Tier \`1\`: Less than \`XXX ETH\`</li>
                          <li>Tier \`2\`: Greater than or equal to \`XXX ETH\` and less than or equal to \`YYY ETH\`</li>
                          <li>Tier \`3\`: Greater than \`YYY ETH\`</li>
                        </ul>
                        Each validator "locks in" the three tiers that the Connector was returning at the time of staking, for the whole validator lifetime.`,
    example: [7, 5, 4],
  })
  @Min(0, {
    each: true,
  })
  @Max(100, {
    each: true,
  })
  @IsArray()
  @IsDefined()
  feeTiers: number[]

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
}
