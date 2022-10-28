import { ApplicationContext } from './context'
import config from './config/configuration'

async function startServer() {
  const app = await ApplicationContext()

  process.title = process.env.npm_package_name

  app.enableShutdownHooks()

  await app.listen(config().port)
}

async function stopServer() {
  const app = await ApplicationContext()
  app.close()
}

export { startServer, stopServer }
