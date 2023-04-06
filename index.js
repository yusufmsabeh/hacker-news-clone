import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { openDatabase } from "./database/index.js";
import { router as userRouter } from "./routes/user.js";
import { router as postRouter } from "./routes/post.js";
const app = express();
const upload = multer();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.listen(process.env.PORT);

openDatabase();

app.use((request, response, next) => {
  console.log("METHOD: ", request.method, "body: ", request.body);
  next();
});

app.use(userRouter);
app.use(postRouter);
