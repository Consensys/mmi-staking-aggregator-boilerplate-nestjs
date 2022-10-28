import * as Joi from 'joi'

export const validationSchema = Joi.object({
  /* Node environment */
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),
  PORT: Joi.number().default(3000),
  EXPORT_DOCS: Joi.boolean().default(false),
  /* Auth0 */
  AUTH0_ISSUER_URL: Joi.string(),
  AUTH0_AUDIENCE: Joi.string(),
  /* Feature specific */
})

export default () => {
  return {
    /* Node environment */
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    logLevel: process.env.LOG_LEVEL,
    logPrettyPrint: process.env.LOG_PRETTY_PRINT === 'true',
    exportDocs: process.env.EXPORT_DOCS === 'true',
    /* Auth0 */
    auth: {
      AUTH0_ISSUER_URL: process.env.AUTH0_ISSUER_URL,
      AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    },
    /* Feature specific */
  }
}
