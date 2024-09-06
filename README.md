# Basic CRUD API for Users with Express

## Description
This API is a simple CRUD API for managing users, created with Express.js and intended to be used with Jest for testing.

## Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB Atlas**: A MongoDB database hosted on MongoDB Atlas.

## How to Use
Follow these steps to set up and run the API:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aethrox/users-api.git
   cd users-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create MongoDB Database**:
   - Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a database.
   - Create a `.env` file in the root of the project with the following content:

   ```env
   MONGO_URI=your_mongodb_uri
   ```

4. **Start the Server**:
   ```bash
   npm start       # For normal start
   # or
   npm run dev         # For development mode with nodemon
   ```

## How to Use with Docker Compose
To run the API in a Docker Compose environment:

1. **Ensure Docker Compose is Installed**: Make sure Docker Compose is installed and running on your machine.

2. **Build and Run the Docker Compose Services**:
   ```bash
   docker-compose up -d
   ```
   - The `-d` flag runs the services in detached mode.

3. **Access the API**:
   - The API will be accessible at `http://localhost:8080`.

4. **Stop the Docker Compose Services**:
   ```bash
   docker-compose down
   ```

## Running Tests
To run the tests for the API, use the following command:

```bash
npm run test
```

## API Endpoints
- **GET /users**: Retrieve all users.
- **GET /users/:id**: Retrieve a user by ID.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update an existing user.
- **DELETE /users/:id**: Delete a user.

## Technologies Used
- **Node.js** (ES6+)
- **Express**
- **Jest**
- **Supertest**
- **Nodemon**
