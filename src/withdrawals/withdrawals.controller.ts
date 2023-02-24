import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { Observable, of } from 'rxjs'
import {
  ApiInternalServerErrorResponseGeneric,
  ApiUnauthorizedResponseGeneric,
} from '../apiErrorResponsesGeneric'
import {
  ApiInvalidPubKeyResponse,
  ApiValidatorNotFoundResponse,
} from './apiResponses'
import { RequestSignedVemParams } from './dto/request-signed-vem.params'
import { VoluntaryExitMessage } from './dto/voluntary-exit-message.dto'

@ApiTags('Withdrawals')
@Controller()
export class WithdrawalsController {
  private readonly logger = new Logger(WithdrawalsController.name)

  @Get('/voluntary-exit-message/:valPubKey')
  @ApiOperation({
    summary: 'Request a signed voluntary exit message',
    description: `Returns a [signed voluntary exit message](https://benjaminion.xyz/eth2-annotated-spec/phase0/beacon-chain/#signedvoluntaryexit),
          but **does not** initiate the actual exit.
      `,
  })
  @ApiBearerAuth()
  @ApiOkResponse({ type: VoluntaryExitMessage })
  @ApiUnauthorizedResponseGeneric()
  @ApiInvalidPubKeyResponse()
  @ApiValidatorNotFoundResponse()
  @ApiInternalServerErrorResponseGeneric()
  public requestSignedVem(
    @Param() params: RequestSignedVemParams,
  ): Observable<VoluntaryExitMessage> {
    this.logger.log(params, '📮 Generate voluntary exit messsage.')
    const { valPubKey } = params
    console.log('valPubKey', valPubKey)

    return of(new VoluntaryExitMessage())
  }

  @Post('/exit-validator/:valPubKey')
  @ApiOperation({
    summary: 'Exit a validator',
    description: `Exit a validator immediately by signing the exit transaction and broadcasting it to the Beacon chain.`,
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'Created',
  })
  @ApiInvalidPubKeyResponse()
  @ApiValidatorNotFoundResponse()
  @ApiInternalServerErrorResponseGeneric()
  public exitValidator(
    @Param() params: RequestSignedVemParams,
  ): Observable<any> {
    this.logger.log(params, '🚪 Withrawal requested.')
    // TODO return type
    const { valPubKey } = params
    console.log('valPubKey', valPubKey)

    return of({ status: HttpStatus.CREATED })
  }
}
