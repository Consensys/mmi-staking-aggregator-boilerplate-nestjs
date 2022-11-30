import { HttpModule } from '@nestjs/axios'
import { CacheModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration, { validationSchema } from '../config/configuration'
import { HeartbeatService } from './heartbeat.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: validationSchema,
      load: [configuration],
    }),
    HttpModule.register({
      baseURL: configuration().MMI_STAKING_API_URL,
    }),
    CacheModule.register(),
  ],
  providers: [HeartbeatService],
})
export class HeartbeatModule {}
