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
import { Details } from './dto/details'

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
    details.estimatedGrossRewardsRate = {
      '1D': 0.0137,
      '1W': 0.0961,
      '1M': 0.4166,
      '1Y': 5,
    }
    details.fees = 5
    details.tvl = 7060624149.296207
    details.nodeUptime = {
      '1D': 93.2,
      '1W': 96.9,
      '1M': 95,
      '1Y': 92.1,
    }
    details.integrityRebate = true
    details.availabilityRebate = false
    return of(details)
  }
}
