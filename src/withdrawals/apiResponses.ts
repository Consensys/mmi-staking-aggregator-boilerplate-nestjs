import { HttpStatus } from '@nestjs/common'
import { ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger'

export const ApiInvalidPubKeyResponse = () =>
  ApiBadRequestResponse({
    description: 'Invalid validator public key.',
    content: {
      'application/json': {
        example: {
          statusCode: HttpStatus.BAD_REQUEST,
          message: [
            'valPubKey must match /^0x[a-fA-F0-9]{96}$/ regular expression',
          ],
          error: 'Bad Request',
        },
      },
    },
  })

export const ApiValidatorNotFoundResponse = () =>
  ApiNotFoundResponse({
    description: 'No validator with passed public key found.',
    content: {
      'application/json': {
        example: {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'No validator with passed public key found.',
        },
      },
    },
  })
