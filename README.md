# hacker-news-clone

### How to install

```
git clone https://github.com/yusufmsabeh/hacker-news-clone.git
cd hacker-news-clone
npm i
npm start
```

## .env File

To enable the application to function properly, it is necessary to create a .env file
ACCESS_TOKEN_SECRET= # random value to use as a access token secret
PORT= # The port which the application will run on

# End-points List

1. Authorization End-points

   - /login ==> POST
   - /signup ==> POST

2. User End-points

   - /updateuser ==> POST
   - /updateusername ==> POST
   - /updatepassword ==> POST
   - /deleteuser ==> POST

3. Posts End-points
   - /posts ==> GET ==> get list of posts
     > to get posts for specific user send his id in params
   - /posts ==> POST ==> Add Post
