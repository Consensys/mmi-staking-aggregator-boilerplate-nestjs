import {
  INestApplication,
  VersioningType,
  VERSION_NEUTRAL,
} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { writeFileSync } from 'fs'
import * as packageJson from '../package.json'
import { AppModule } from './app.module'
import config from './config/configuration'

let context: INestApplication = null

export const ApplicationContext = async () => {
  if (!context) {
    context = await NestFactory.create(AppModule, { bufferLogs: true })

    context.enableCors()

    context.enableVersioning({
      defaultVersion: VERSION_NEUTRAL,
      type: VersioningType.HEADER,
      header: 'Accepts-Version',
    })

    const options = new DocumentBuilder()
      .setTitle('Acme Adapter REST API')
      .setDescription(
        "This REST API is used for integrating Acme's staking services with the MetaMask Institutional Staking Aggregator.",
      )
      .setVersion(`v${packageJson.version}`)
      .addOAuth2()
      .addBearerAuth()
      .addServer(`http://localhost:${config().port}/`, 'Local instance running')
      .build()

    const document = SwaggerModule.createDocument(context, options, {
      ignoreGlobalPrefix: true,
    })

    SwaggerModule.setup('docs', context, document)

    // Whether to export an Open API spec file to disk for generation of a docs site
    if (process.env.EXPORT_DOCS === 'true') {
      writeFileSync('./api-spec.json', JSON.stringify(document))
    }

    return context
  }
}
