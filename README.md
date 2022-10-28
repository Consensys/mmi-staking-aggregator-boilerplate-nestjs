# MMI Staking Aggregator - Boilerplate Nest.JS

A boilerplate Nest.js application to run and host your **adapter REST API**, and integrate with the [MetaMask Instiutional Staking Aggregator](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/).

Implements the [required OpenAPI Specification](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/docs/integrating-via-rest-api/adapter-openapi) and pre-configures the [Authentication](https://consensys.gitlab.io/codefi/products/mmi/staking-aggregator-auth-poc/docs/integrating-via-rest-api/authentication).

## Setup

In this repository we use a specific `Node.js` version, `16`. We recommend you use `nvm` to manage `Node.js` versions seamlessly. To install it and use the correct Node.js version read the instructions [here](https://github.com/nvm-sh/nvm).

```bash
npm i
```

Create a `.env` file, you can copy `.env.sample` and use it as is.

And in another shell we can run the Nestjs server

```bash
npm run start:dev
```

## Development

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

This boilerplate comes with [Nest.js' Swagger integration](https://docs.nestjs.com/recipes/swagger). By correctly naming your controllers and taking advantage of the plugin's decorators you can automatically generate Swagger documentation. To take a look at how this documentation looks run the project using

```bash
npm run start
```

and then visit [http://localhost:3000/docs](http://localhost:3000/docs)
