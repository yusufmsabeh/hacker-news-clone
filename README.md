## Getting Started

### Installation

```
git clone https://github.com/yusufmsabeh/hacker-news-clone.git
cd shop-expressjs
npm i
npm start
```

### Configuration

To configure the application, you must create a .env file in the root directory of the project. The following variables must be defined in the .env file:

```
# random value to use as a access token secret
ACCESS_TOKEN_SECRET=

# The port which the application will run on
PORT=
```

### Usage

This API provides the following endpoints:

## Authorization End-points

### POST/login

Login and get access token

### POST/signup

Creates new user account

## User End-points

### POST/updateuser

updates public user data

### POST/updateusername

Updates username

### POST/updatepassword

Updates a user password

### POST/deleteuser

Deletes a user account from database

# Posts End-points

### POST/posts

Creates a new posts in the database

### GET/posts

Retrieves a list of posts from the database

### GET/posts?:user_id

Retrieves a list of posts for a specific user from the database

---

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/22847465-b5c9b3c6-65f8-4297-a15b-fe3765f0d47a?action=collection%2Ffork&collection-url=entityId%3D22847465-b5c9b3c6-65f8-4297-a15b-fe3765f0d47a%26entityType%3Dcollection%26workspaceId%3D2d4f0c4a-f1d9-4a24-8e26-820600df482a)
