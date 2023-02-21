import express from "express";
import { authorizationMiddleWare } from "../middlewares/authorization.js";
import * as postsHandler from "../endPointHandlers/posts.js";

export const router = express.Router();
router.get("/posts", postsHandler.postsGET);
router.post("/posts", authorizationMiddleWare, postsHandler.postsPOST);
