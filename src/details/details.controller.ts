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
import { Details } from './models/details'

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
  public getDetails(): Observable<Details> {
    // TODO Implement me!
    const details = new Details()
    details.feeTiers = [7, 5, 4, 3, 2]
    details.tvl = 7060624149.296207
    return of(details)
  }
}
