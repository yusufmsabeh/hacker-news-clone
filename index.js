import express from "express";
import { openDatabase } from "./database/index.js";
import * as postsHandler from "./endPointHandlers/posts.js";
import * as usersHandler from "./endPointHandlers/users.js";

const app = express();
app.use(express.json());
app.listen(3000);
let posts = [];
openDatabase();

app.use((request, response, next) => {
  console.log("METHOD: ", request.method, "body: ", request.body);
  next();
});

app.get("/posts", postsHandler.postsGET);

app.post("/posts", postsHandler.postsPOST);

app.post("/signup", usersHandler.signUp);
