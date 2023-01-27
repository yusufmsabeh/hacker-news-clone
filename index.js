import express from "express";
import { openDatabase } from "./database/index.js";
import * as postsHandler from "./endPointHandlers/posts.js";
import * as usersHandler from "./endPointHandlers/users.js";
import { authorizationMiddleWare } from "./middlewares/authorization.js";
const app = express();
app.use(express.json());
app.listen(3000);

openDatabase();

app.use((request, response, next) => {
  console.log("METHOD: ", request.method, "body: ", request.body);
  next();
});

//public endpoints
app.get("/posts", postsHandler.postsGET);
app.post("/signup", usersHandler.signUp);
app.post("/login", usersHandler.login);
app.use(authorizationMiddleWare);
// private endpoints
app.post("/posts", postsHandler.postsPOST);
app.post("/updateuser", usersHandler.updateUser);
app.post("/updateusername", usersHandler.updateUserName);
app.post("/updatepassword", usersHandler.updatePassword);
app.post("/deleteuser", usersHandler.deleteUser);
