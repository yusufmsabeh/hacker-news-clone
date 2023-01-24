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
    throw e;
  }
}

export async function checkUserName(userName) {
  try {
    return await db.get(
      "SELECT id,firstName,lastName,userName,password FROM users WHERE userName=?",
      userName
    );
  } catch (e) {
    throw e;
  }
}

export async function getUserById(id) {
  try {
    return await db.get("SELECT password FROM users WHERE id=? ", id);
  } catch (e) {
    throw e;
  }
}

export async function updateUser(user) {
  try {
    await db.run(
      "UPDATE users SET firstName=?,lastName=? WHERE id=?",
      user.firstName,
      user.lastName,
      user.userId
    );
  } catch (e) {
    throw e;
  }
}

export async function updateUserName(user) {
  try {
    await db.run(
      "UPDATE users SET userName=? WHERE id=?",
      user.userName,
      user.userId
    );
  } catch (e) {
    throw e;
  }
}

export async function updatePassword(id, password) {
  try {
    console.log(id, password);
    await db.run("UPDATE users SET password=? WHERE id=?", password, id);
  } catch (e) {
    throw e;
  }
}
