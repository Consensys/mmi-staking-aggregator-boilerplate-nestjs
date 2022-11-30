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
  /* Registration to MMI Staking */
  MMI_STAKING_API_URL: Joi.string().uri().required(),
  MMI_STAKING_REGISTER_ISSUER_URL: Joi.string().uri().required(),
  MMI_STAKING_REGISTER_AUDIENCE: Joi.string().required(),
  MMI_STAKING_REGISTER_CLIENT_ID: Joi.string().required(),
  MMI_STAKING_REGISTER_CLIENT_SECRET: Joi.string().required(),
})

export default () => {
  return {
    /* Node environment */
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    /* Connector details */
    CONNECTOR_BASE_URL: process.env.CONNECTOR_BASE_URL,
    CONNECTOR_NAME: process.env.CONNECTOR_NAME,
    CONNECTOR_DISPLAY_NAME: process.env.CONNECTOR_DISPLAY_NAME,
    CONNECTOR_ENV: process.env.CONNECTOR_ENV,
    CONNECTOR_CHAIN_ID: process.env.CONNECTOR_CHAIN_ID,
    /* Authentication */
    OAUTH_ISSUER_URL: process.env.OAUTH_ISSUER_URL,
    OAUTH_AUDIENCE: process.env.OAUTH_AUDIENCE,
    /* Registration to MMI Staking */
    MMI_STAKING_API_URL: process.env.MMI_STAKING_API_URL,
    MMI_STAKING_REGISTER_ISSUER_URL:
      process.env.MMI_STAKING_REGISTER_ISSUER_URL,
    MMI_STAKING_REGISTER_AUDIENCE: process.env.MMI_STAKING_REGISTER_AUDIENCE,
    MMI_STAKING_REGISTER_CLIENT_ID: process.env.MMI_STAKING_REGISTER_CLIENT_ID,
    MMI_STAKING_REGISTER_CLIENT_SECRET:
      process.env.MMI_STAKING_REGISTER_CLIENT_SECRET,
  }
}
