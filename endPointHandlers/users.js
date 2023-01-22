import * as usersDAO from "../database/DAOs/usersDAO.js";
import * as crypto from "node:crypto";

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
