import express from "express";
import { openDatabase } from "./database/index.js";
import { router as userRouter } from "./routes/user.js";
import { router as postRouter } from "./routes/post.js";
const app = express();
app.use(express.json());
app.listen(process.env.PORT);

openDatabase();

app.use((request, response, next) => {
  console.log("METHOD: ", request.method, "body: ", request.body);
  next();
});

app.use(userRouter);
app.use(postRouter);
