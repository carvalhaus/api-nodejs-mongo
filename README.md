# api-nodejs-mongo

This is a simple RESTful API built with Node.js, Express and MongoDB. It demonstrates basic Create and Read operations using a MongoDB database.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v20.x or higher)
- npm (Node.js package manager)
- MongoDB account

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:carvalhaus/api-nodejs-mongo.git
   ```

2. **Install dependencies**:

   ```bash
   cd api-nodejs-mongo
   npm install
   ```

3. **Set up environment variables**:

   Create a .env file in the root directory and provide the following environment variables:

   ```bash
   MONGODB_CONNECTION=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace 'your_mongodb_connection_string' with your MongoDB connection string and 'your_jwt_secret_key' with a secure key for JWT token generation.

4. **Start the server**:

   ```bash
   npm start
   ```

## API Endpoints

The following endpoints are available:

- **GET /admin/users**: Get admin user
- **POST /auth/register**: Create a new user
- **POST /auth/authenticate**: Authenticate user by email and password

## Usage

You can use tools like Postman or curl to interact with the API endpoints.

### Example:

#### 1. **Create a user**

- **Endpoint: 'POST /auth/register'**
- **Request body**:

  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "123456"
  }
  ```

- **Response**

  ```json
  {
    "user": {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "_id": "6640b82f6fb565c8fdca7293",
      "createdAt": "2024-05-12T12:38:07.897Z",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDBiODJmNmZiNTY1YzhmZGNhNzI5MyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTcxNTUxNzQ4OCwiZXhwIjoxNzE1NjAzODg4fQ.zIXMsDLgcEpT-qRnjkfuTxc75X1ziYX9p1q2A24i2XE"
  }
  ```

#### 2. **Authenticate use by email and password**

- **Endpoint: 'POST /auth/authenticate'**
- **Request body**:

  ```json
  {
    "email": "johndoe@example.com",
    "password": "123456"
  }
  ```

- **Response**

  ```json
  {
    "user": {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "_id": "6640b82f6fb565c8fdca7293",
      "createdAt": "2024-05-12T12:38:07.897Z",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDBiODJmNmZiNTY1YzhmZGNhNzI5MyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTcxNTUxNzQ4OCwiZXhwIjoxNzE1NjAzODg4fQ.zIXMsDLgcEpT-qRnjkfuTxc75X1ziYX9p1q2A24i2XE"
  }
  ```

#### 3. **Authenticate admin user**

- **Endpoint: 'GET /admin/users'**

- **Response in console**

  ```bash
  {
    id: '6640b82f6fb565c8fdca7293',
    name: 'John Doe',
    iat: 1715517730,
    exp: 1715604130
  }
  ```

## Contributing

Contributions are welcome! If you find any issues or would like to propose enhancements, please open an issue or submit a pull request.
