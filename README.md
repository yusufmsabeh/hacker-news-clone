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

1. Authorization End-points

   ### POST/login

   Login and get access token

   ### POST/signup

   Creates new user account

2. User End-points

   ### POST/updateuser

   updates public user data

   ### POST/updateusername

   Updates username

   ### POST/updatepassword

   Updates a user password

   ### POST/deleteuser

   Deletes a user account from database

## 3. Posts End-points

### POST/posts

Creates a new posts in the database

### GET/posts

Retrieves a list of posts from the database

### GET/posts?:user_id

Retrieves a list of posts for a specific user from the database
