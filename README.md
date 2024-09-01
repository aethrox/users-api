# Basic CRUD API for Users with Express

## Description
This API is a simple CRUD API for users, created to be used with Jest library tests.

## How to Use
**To use this API, you need to have Node.js installed on your machine. Then, follow these steps:**

```bash
git clone https://github.com/aethrox/users-api.git
cd users-api
pnpm install
```

**After that, create a MongoDB database at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a `.env` file in the root of the project with the following content:**

```env
MONGO_URI=your_mongodb_uri
```

**Then, you can start the server with the following command:**

```bash
pnpm start # or pnpm dev (nodemon)
```

## Tests
**To run the tests, use the following command:**

```bash
pnpm test
```

## Endpoints
- **GET /users**: Get all users.
- **GET /users/:id**: Get a user by ID.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update a user.
- **DELETE /users/:id**: Delete a user.

## Technologies
- Node.js (ES6+)
- Express
- Jest
- Supertest
- Nodemon