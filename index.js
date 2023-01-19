
import express from 'express';
import { openDatabase  } from './database/index.js';
import * as postsHandler from './endPointHandlers/posts.js';



const app = express();
app.use(express.json());
app.listen(3000);
let posts=[];
openDatabase();


app.use((request,response,next)=>{
    console.log('METHOD: ',request.method,"body: ",request.body);
    next();
})


app.get('/',(request,response)=>{
    console.log("responding");
    response.sendFile('D:/Coding/web_development/expressjs/server/index.html');

 
})

app.get('/posts',(request,response)=>{

    postsHandler.postsGET(request,response);

 
})


app.post('/posts',(request,response)=>{
    postsHandler.postsPOST(request,response);
})