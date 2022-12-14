import * as Joi from 'joi'

export const validationSchema = Joi.object({
  /* Node environment */
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),
  PORT: Joi.number().default(3000),
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
    AUTH_ISSUER_URL: process.env.AUTH_ISSUER_URL,
    AUTH_AUDIENCE: process.env.AUTH_AUDIENCE,
  }
}
