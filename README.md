
## Nest-js starter

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Description

This starter project makes use of the [Nest.js](https://nestjs.com/) framework.
A progressive Node.js framework for building efficient, reliable and scalable server-side applications.

## Dependencies
nest-js  
class-transformer  
class-validator  
Coveralls  
mysql  
reflect-metadata  
rimraf  
sqlite/sqlite3  
typeorm 

## Dev-dependencies:  
jest  
prettier  
eslint  
socket.io-client  
supertest  
ts-jest  
ts-loader  
ts-node  
typeorm-fixtures-cli  
typescript  

## Installation

```bash
$ npm install
```

If you are going to use the coveralls command to check code coverage, you need to configure coveralls for your repository.     

If you are going to use Travis CI for your build pipeline, you need to configure Travis CI and the `travis.yml` file for your repository.

## Running the app

Requires MYSQL to be installed and MYSQL server to be running if using out of the box config.  
Requires the `.env` file to be configured with the Database credentials.


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

