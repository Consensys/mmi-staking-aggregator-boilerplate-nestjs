# MMI Staking - Connector boilerplate (NestJS)

A boilerplate NestJS application to run and host your **Connector**, and integrate with [MMI Staking (Beta)](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/).

Implements the [required OpenAPI Specification](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/docs/integrating-via-rest-api/adapter-openapi) and pre-configures an [OAuth M2M authentication](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/docs/integrating-via-rest-api/authentication).

## Setup

In this repository we use a specific `NodeJS` version, `16`. We recommend you use `nvm` to manage `Node.js` versions seamlessly. To install it and use the correct Node.js version read the instructions [here](https://github.com/nvm-sh/nvm).

```bash
npm i
```

Create a `.env` file, copying it from `.env.sample`.

## Configuring Authentication

If you want to authenticate your endpoints using [OAuth M2M](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/docs/integrating-via-rest-api/authentication#using-an-oauth-m2m-connection), the boilerplate is pre-configured with everything you need. In `.env`, set these up, with your own OAuth values:

```ini
AUTH_ISSUER_URL=XXX
AUTH_AUDIENCE=XXX
```

FYI, these are used in the file [src/auth/jwt.strategy.ts](./src/auth/jwt.strategy.ts). Find more details about configuration in the [Passport documentation](https://www.passportjs.org/packages/passport-jwt/).

The boilerplate doesn't ship with an example for [API Key authentication](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/docs/integrating-via-rest-api/authentication#using-an-api-key). Implementation details are up to up, but you can use a similar implementation with [Passport](https://www.passportjs.org/).

## Development

```bash
npm run start:dev
```

Some of the following commands are avaliable to help you on your everyday programming

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## Testing

Unit tests can be run using

```bash
npm run test
```

or if you want to see test coverage

```bash
npm run test:cov
```

Integration tests can be ran using

```bash
npm run test:integration
```

## Documentation

This boilerplate comes with [NestJS' Swagger integration](https://docs.nestjs.com/recipes/swagger). By correctly naming your controllers and taking advantage of the plugin's decorators you can automatically generate Swagger documentation. To take a look at how this documentation looks run the project using

```bash
npm run start
```

and then visit [http://localhost:3000/docs](http://localhost:3000/docs)
