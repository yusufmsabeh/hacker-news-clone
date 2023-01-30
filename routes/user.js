import express from "express";
import { authorizationMiddleWare } from "../middlewares/authorization.js";
import * as usersHandler from "../endPointHandlers/users.js";

export const router = express.Router();

router.post("/updateuser", authorizationMiddleWare, usersHandler.updateUser);
router.post(
  "/updateusername",
  authorizationMiddleWare,
  usersHandler.updateUserName
);
router.post(
  "/updatepassword",
  authorizationMiddleWare,
  usersHandler.updatePassword
);
router.post("/deleteuser", authorizationMiddleWare, usersHandler.deleteUser);

router.post("/signup", usersHandler.signUp);
router.post("/login", usersHandler.login);
