import { ApiProperty } from '@nestjs/swagger'
import Regexes from './regexes'

/**
 * Re-useable Swagger ApiProperties
 */

export const ApiPropertyEth1Address = () =>
  ApiProperty({
    pattern: Regexes.ETH1_ADDRESS.toString(),
    example: '0x93247f2209abcacf57b75a51dafae777f9dd38bc',
    description:
      'An Ethereum 1 address, uniquely identifying them. 20-bytes, hex encoded with 0x prefix, case insensitive.',
    required: true,
  })
