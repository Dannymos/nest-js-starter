
## Tasklist.io

[![Build Status]()]()
[![Coverage Status]()]()
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Maintainability Rating]()]()
[![Quality Gate Status]()]()
[![Bugs]()]()
[![Code Smells]()]()
[![Reliability Rating]()]()
[![Security Rating]()]()
[![Vulnerabilities]()]()
[![Hotel](https://img.shields.io/badge/Hotel-Trivago-success)](https://img.shields.io/badge/Hotel-Trivago-success)

## Description

This project makes use of the [Nest.js](https://nestjs.com/) framework.
A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
And used [Nest.js TypeScript starter](https://github.com/nestjs/typescript-starter) as a boiler plate.

Requires MYSQL to be installed and MYSQL server to be running.

Includes the following packages:
nest-js
class-transformer
class-validator
Coveralls
mysql
reflect-metadata
rimraf
sqlite/sqlite3
typeorm

dev-dependencies:
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

Sonarcloud analysis: https://sonarcloud.io/dashboard?id=Dannymos_bep-lingogame

## Installation

```bash
$ npm install
```

## Running the app

Configure the .env file first

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

