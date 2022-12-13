import * as Joi from 'joi'

export const validationSchema = Joi.object({
  /* Node environment */
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),
  PORT: Joi.number().default(3000),
  /* Connector details */
  CONNECTOR_BASE_URL: Joi.string().uri().required(),
  CONNECTOR_NAME: Joi.string().pattern(/^[a-z]+(-[a-z]*)*$/),
  CONNECTOR_DISPLAY_NAME: Joi.string().required(),
  CONNECTOR_ENV: Joi.string()
    .valid('local', 'dev', 'val', 'staging', 'uat', 'prod')
    .default('dev'),
  CONNECTOR_CHAIN_ID: Joi.number().valid(1, 5).default(5),
  /* Authentication */
  AUTH_ISSUER_URL: Joi.string().uri().required(),
  AUTH_AUDIENCE: Joi.string().required(),
})

export default () => {
  return {
    /* Node environment */
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    /* Authentication */
    OAUTH_ISSUER_URL: process.env.OAUTH_ISSUER_URL,
    OAUTH_AUDIENCE: process.env.OAUTH_AUDIENCE,
  }
}
