import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { PassportModule } from '@nestjs/passport'
import { JwtAuthGuard } from './jwt-auth.guard'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [PassportModule],
  providers: [
    JwtStrategy, // Enable authentication globally https://docs.nestjs.com/security/authentication#enable-authentication-globally
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [PassportModule],
})
export class AuthModule {}
