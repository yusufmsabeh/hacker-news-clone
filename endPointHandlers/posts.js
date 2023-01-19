import  * as postsDAO from "../database/DAOs/postsDAO.js";
import * as crypto from 'node:crypto'

export async function postsGET(request,response){
   let posts= await postsDAO.getAllPosts();
   response.send(posts);
}

export async function postsPOST(request,response){
   try{

      let post =request.body;
      if(!post.postName||!post.link){
         response.send("Bad Request").status(400);
         return;
      }
         if( await postsDAO.checkPostLink(post.link)){
            response.send("post link already exist").status(400);
            return;
         }
         post.id = crypto.randomUUID();
         await postsDAO.insertPost(post);
         response.sendStatus(200);
      
   
   }catch(e){
      console.error(e)
      response.sendStatus(500);
   }
}