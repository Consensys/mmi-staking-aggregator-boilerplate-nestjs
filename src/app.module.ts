import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { TerminusModule } from '@nestjs/terminus'
import config, { validationSchema } from './config/configuration'

import { HealthController } from './health/health.controller'
import { AuthModule } from './auth/auth.module'
import { StakesModule } from './stakes/stakes.module'
import { DetailsModule } from './details/details.module'
import { HeartbeatModule } from './heartbeat/heartbeat.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      load: [config],
    }),
    HttpModule,
    TerminusModule,
    ScheduleModule.forRoot(),
    /* Your modules below */
    AuthModule,
    StakesModule,
    DetailsModule,
    HeartbeatModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
