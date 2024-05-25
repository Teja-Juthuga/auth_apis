
# Authenticated API's (SkyGoalTech - Assignment)

This project provides authentication APIs using Express.js and MongoDB as the database. The APIs allow users to register, log in, and manage their authentication tokens.

## Features

- User Registration
- User Login
- Token-Based Authentication
- Middleware for Protected Routes
## Installation

1. **Clone the repository:**

```bash
    git clone https://github.com/Teja-Juthuga/auth_apis.git
    cd auth_apis
```

2. **Install dependencies:**

```bash
    npm install
```

3. **Set up environment variables:**

```env
    PORT=8081
    MONGO_COMPASS_URI=mongodb://localhost:27017
    MONGO_ATLAS_URI="mongodb+srv://appUsers:NmS04Tp3notaUKgy@atlascluster.a4vovbu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"
    JWT_SECRET=mysecretkey
```
## Usage

```bash
    npm start
```



## API Endpoints

### URL
```bash
    https://authenticated-apis.vercel.app
```


| Endpoint       | Method | Description             |
|----------------|--------|-------------------------|
| /signup        | POST   | Register a new user     |
| /login         | POST   | Login an existing user  |
| /user          | POST   | Access protected route & returns User Details  |
| /test | GET    | Test API  |


## Deployment

This project Deployed using Vercel and MONGO Atlas 

```bash
    https://authenticated-apis.vercel.app
```


## Tech Stack

**Server:** Node, Express

**Database:** Mongo Atlas
