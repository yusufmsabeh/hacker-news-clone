import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
export async function authorizationMiddleWare(request, response, next) {
  try {
    const authHeader = request.headers["authorization"];
    if (!authHeader) {
      response.sendStatus(401);
      return;
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      response.sendStatus(401);
      return;
    }

    let decryptedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    request.body.userId = decryptedToken.userId;
    next();
  } catch (e) {
    console.error(e);
    if (e.message == "invalid token") response.sendStatus(401);
    else response.sendStatus(500);
  }
}
