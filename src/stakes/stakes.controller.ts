import { Body, Controller, Headers, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { Observable, of } from 'rxjs'
import {
  ApiBadRequestResponseGeneric,
  ApiUnauthorizedResponseGeneric,
} from '../api-error-responses-generic'
import { SimpleDeposit } from './dto/simple.deposit'
import { SimpleStakeResponse } from './dto/simple.stake.response'

@ApiTags('Stakes')
@Controller()
export class StakesController {
  @Post('stake')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SimpleStakeResponse })
  @ApiBadRequestResponseGeneric()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponseGeneric()
  @ApiOperation({
    summary: 'Initiate a Stake',
    description: `Inititate a stake by idempotently reserving a <code>validator</code> for the specific client. Requires an idempotent key.
        <br><br>
        It takes the supplied "type 1" <code>withdrawal_pubkey</code> ETH1 address, the amount which <strong>must</strong> be equal to 32,000,000,000 <code>Gwei</code> (32 <code>ETH</code>) and a <code>fee_recipient</code> ETH1 address.
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
