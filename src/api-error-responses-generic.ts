import { HttpStatus } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import Regexes from './regexes'

/**
 * Pre-configured versions of various Swagger decorators for API responses,
 * with a generic descriptions and a examples.
 */

export const ApiUnauthorizedResponseGeneric = () =>
  ApiUnauthorizedResponse({
    description: `One of these happened:
    <ul>
      <li> \`Authorization\` header with bearer token is missing</li>
       <li> Bearer token is invalid / expired</li>
      </ul>`,
    content: {
      'application/json': {
        example: {
          statusCode: 401,
          message: `Unauthorized`,
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

export const ApiBadRequestResponseGeneric = () =>
  ApiBadRequestResponse({
    description: 'Invalid withdrawal public key.',
    content: {
      'application/json': {
        examples: {
          InvalidWithdrawalPublicKey: {
            value: {
              statusCode: HttpStatus.BAD_REQUEST,
              message: [
                `withdrawal_pubkey must match ${Regexes.ETH1_ADDRESS} regular expression`,
              ],
              error: 'Bad Request',
            },
          },
          InvalidFeeRecipient: {
            value: {
              statusCode: HttpStatus.BAD_REQUEST,
              message: [
                `fee_recipient must match ${Regexes.ETH1_ADDRESS} regular expression`,
              ],
              error: 'Bad Request',
            },
          },
        },
      },
    },
  })
