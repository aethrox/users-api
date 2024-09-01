# Basic CRUD API for users with Express

## Description
This API is a simple CRUD API for users. It was created to be used in a jest lib test.

## How to use
To use this API, you need to have Node.js installed in your machine. After that, you can clone this repository and run the following commands:

if don't have pnpm installed, run the following command:

```bash
npm install -g pnpm
```

if you have pnpm installed, run the following commands:

```bash
cd users-api
pnpm install
pnpm start or pnpm dev (nodemon)
```

## Tests
To run the tests, you can run the following command:

```bash
pnpm test
```

## Endpoints
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

## Techs
- Node.js
- Express
- Jest
- Supertest
- Nodemon