import { Controller, Post } from '@nestjs/common'
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import { Observable, of } from 'rxjs'
import { User } from './dto/user'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  @Post()
  @ApiOperation({
    summary: 'Onboard a User',
    description:
      'This web service must offer a way to programmatically create new users in your system, so that whenever a new user is created in the MetaMask Institutional Portfolio Dashboard, their identity gets propagated to your system as well.',
  })
  @ApiCreatedResponse()
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiInternalServerErrorResponse()
  createUser(): Observable<User> {
    // TODO Implement me!
    return of(new User())
  }
}
