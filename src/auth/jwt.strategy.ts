import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { passportJwtSecret } from 'jwks-rsa'
import * as dotenv from 'dotenv'

dotenv.config()

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH_ISSUER_URL}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: process.env.AUTH_ISSUER_URL,
      audience: process.env.AUTH_AUDIENCE,
      algorithms: ['RS256'],
    })
  }

  /**
   * Validate is a hook, where we can add further auth/access checks
   * E.g. block non-allow-listed users
   * @param payload
   * @returns
   */
  async validate(payload: unknown): Promise<unknown> {
    return payload
  }
}
