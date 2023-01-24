import * as postsDAO from "../database/DAOs/postsDAO.js";
import * as crypto from "node:crypto";

export async function postsGET(request, response) {
  try {
    let posts;
    if (!request.query.user_id) posts = await postsDAO.getAllPosts();
    else posts = await postsDAO.getAllPostsSpecificUser(request.query.user_id);
    response.send(posts);
  } catch (e) {
    console.error(e);
    response.sendStatus(500);
  }
}

export async function postsPOST(request, response) {
  try {
    let post = request.body;
    if (!post.postName || !post.link || !post.userId) {
      response.status(400).send("Bad Request");
      return;
    }
    if (await postsDAO.checkPostLink(post.link)) {
      response.status(400).send("post link already exist");
      return;
    }
    post.id = crypto.randomUUID();
    await postsDAO.insertPost(post);
    response.sendStatus(200);
  } catch (e) {
    if (e.errno == 19) {
      response.status(400).send("something want wrong, make sure of userId");
      return;
    }
    response.sendStatus(500);
  }
}
