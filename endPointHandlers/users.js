import * as usersDAO from "../database/DAOs/usersDAO.js";
import * as crypto from "node:crypto";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export async function signUp(request, response) {
  try {
    let user = request.body;
    if (
      !user.firstName ||
      !user.lastName ||
      !user.userName ||
      !user.password ||
      user.password.length < 8
    ) {
      response.status(400).send("Bad Request");
      return;
    }

    if (await usersDAO.checkUserName(user.userName)) {
      response.status(400).send("userName already exist");
      return;
    }
    user.id = crypto.randomUUID();
    await usersDAO.signUp(user);
    response.status(200).send("Sign up Successfully");
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}

export async function login(request, response) {
  try {
    let userLogin = request.body;
    if (!userLogin.userName || !userLogin.password) {
      response.status(400).send("missing some parameters");
      return;
    }
    let user = await usersDAO.checkUserName(userLogin.userName);
    if (!user) {
      response.status(400).send("userName invalid");
      return;
    }

    if (user.password != userLogin.password) {
      response.status(400).send("password in not correct");
      return;
    }

    let token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    response.status(200).send({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      userToken: token,
    });
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}
