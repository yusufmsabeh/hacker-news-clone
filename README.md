# hacker-news-clone

### How to install

```
git clone https://github.com/yusufmsabeh/hacker-news-clone.git
cd hacker-news-clone
npm i
npm start
```

> this serve will run on port 3000 you can change it in the .env file

# End-points List

    1. Authorization End-points
        * /login ==> POST
        * /signup ==> POST

    2. User End-points
        - /updateuser ==> POST
        - /updateusername ==> POST
        - /updatepassword ==> POST
        - /deleteuser ==> POST

    3. Posts End-points
        + /posts ==> GET ==> get list of posts
            > to get posts for specific user send his id in params
        + /posts ==> POST ==> Add Post
