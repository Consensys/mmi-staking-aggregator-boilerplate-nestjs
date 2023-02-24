import { HttpStatus } from '@nestjs/common'
import {
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

/**
 * A pre-configured version of the Swagger decorator @ApiUnauthorizedResponse,
 * with a generic description and a generic example.
 */
export const ApiUnauthorizedResponseGeneric = () =>
  ApiUnauthorizedResponse({
    description:
      'Authorization header with bearer token is missing or invalid.',
    content: {
      'application/json': {
        example: {
          statusCode: 401,
          message: 'Unauthorized',
        },
      },
    },
  })

export const ApiInternalServerErrorResponseGeneric = () =>
  ApiInternalServerErrorResponse({
    description: 'Internal server error.',
    content: {
      'application/json': {
        example: {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal server error',
        },
      },
    },
  })
