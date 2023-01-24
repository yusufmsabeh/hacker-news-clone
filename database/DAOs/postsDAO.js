import { db } from "../index.js";

export async function getAllPosts() {
  try {
    let result = await db.all("SELECT * FROM posts");
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getAllPostsSpecificUser(userId) {
  try {
    return await db.all("SELECT * FROM posts WHERE userId=?", userId);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function insertPost(post) {
  try {
    await db.run(
      "INSERT INTO posts (id,userId,name,link) VALUES (?,?,?,?)",
      post.id,
      post.userId,
      post.postName,
      post.link
    );
    return true;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function checkPostLink(link) {
  try {
    return await db.get("SELECT link FROM posts WHERE link=?", link);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
