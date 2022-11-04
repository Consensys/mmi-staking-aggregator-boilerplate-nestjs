import { Body, Controller, Headers, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Observable, of } from 'rxjs'
import { SimpleDeposit } from './dto/simple.deposit'
import { SimpleStakeResponse } from './dto/simple.stake.response'

@ApiTags('Stakes')
@Controller('stakes')
export class StakesController {
  @Post()
  @ApiOkResponse({ type: SimpleStakeResponse })
  @ApiOperation({
    summary: 'Initiate a Stake',
    description: `Inititate a stake by idempotently reserving a <code>validator</code> for the specific client. Requires an idempotent key.
        <br><br>
        It takes the supplied <code>withdrawal_pubkey</code>, the amount which <strong>must</strong> be an integer multiple of 32,000,000,000 <code>Gwei</code> (32 <code>ETH</code>) and an optional <code>fee_recipient</code> ETH1 address.
        <br><br>
        It returns the deposit payload for the user to send.`,
  })
  createStake(
    @Headers('Idempotency-Key') idemPotencyKey: string,
    @Body() simpleDeposit: SimpleDeposit,
  ): Observable<SimpleStakeResponse> {
    // TODO Implement me!
    return of(new SimpleStakeResponse())
  }
}
