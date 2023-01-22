import { db } from "../index.js";

export async function signUp(user) {
  try {
    console.log(user);
    await db.run(
      "INSERT INTO users (id,firstName,lastName,userName,password)  VALUES (?,?,?,?,?)",
      user.id,
      user.firstName,
      user.lastName,
      user.userName,
      user.password
    );
  } catch (e) {
    console.error(e);
  }
}

export async function checkUserName(userName) {
  return await db.get(
    "SELECT id,firstName,lastName,userName,password FROM users WHERE userName=?",
    userName
  );
}
