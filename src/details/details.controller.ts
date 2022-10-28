import { Controller, Get } from '@nestjs/common'
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import { Observable, of } from 'rxjs'
import { Details } from './details'

@ApiTags('Details')
@Controller('details')
export class DetailsController {
  @Get()
  @ApiOperation({
    summary: 'Get Details',
    description:
      'Generic information about your system and validators performance metrics. These are displayed to the end user in the MetaMask Institutional Portfolio Dashboard.',
  })
  @ApiOkResponse({ type: Details })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  getDetails(): Observable<Details> {
    // TODO Implement me!
    const details = new Details()
    details.estimatedGrossRewards = 0.056
    details.fees = 0.05
    details.tvl = 7060624149.296207
    details.nodeUptime = 0.9995
    details.slashingProtection = true
    details.estimatedValidationActivationDelay = '3600'
    return of(details)
  }
}
