import * as usersDAO from "../database/DAOs/usersDAO.js";
import * as postsDAO from "../database/DAOs/postsDAO.js";
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

export async function updateUser(request, response) {
  try {
    let user = request.body;
    console.log(user);
    if (!user.firstName || !user.lastName) {
      response.sendStatus(400);
      return;
    }
    if (await usersDAO.checkUserName(user.userName)) {
      response.status(400).send("userName already exist");
      return;
    }
    await usersDAO.updateUser(user);
    response.status(200).send("user updated successfully");
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}

export async function updateUserName(request, response) {
  try {
    let user = request.body;
    if (!user.userName) {
      request.status(401).send("userName required");
    }
    let userFromDatabase = await usersDAO.checkUserName(user.userName);
    if (!userFromDatabase) {
      await usersDAO.updateUserName(user);
      response.status(200).send("userName updated successfully");
      return;
    }
    if (userFromDatabase.id == user.userId) {
      response.status(200).send("userName updated successfully");
      return;
    }
    if (userFromDatabase) {
      response.status(400).send("userName already exist");
      return;
    }
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}

export async function updatePassword(request, response) {
  try {
    let body = request.body;
    console.log(body);

    if (!body.newPassword || !body.confirmPassword || !body.oldPassword) {
      response.sendStatus(400);
      return;
    }
    if (body.newPassword != body.confirmPassword) {
      response.status(400).send("Password does not match");
      return;
    }
    let { password } = await usersDAO.getUserById(body.userId);
    if (password != body.oldPassword) {
      response.status(401).send("Incorrect password");
      return;
    }
    await usersDAO.updatePassword(body.userId, body.newPassword);
    response.sendStatus(200);
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}

export async function deleteUser(request, response) {
  try {
    let body = request.body;
    if (!body.password) {
      response.status(400).send("Your Password required");
      return;
    }
    let { password } = await usersDAO.getUserById(body.userId);
    if (body.password != password) {
      response.status(401).send("Wrong password");
      return;
    }
    await postsDAO.deletePostsForUser(body.userId);
    await usersDAO.deleteUser(body.userId);
    response.status(200).send("user has been deleted successfully");
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}
