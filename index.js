
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

app.get('/posts',(request,response)=>{

    postsHandler.postsGET(request,response);

 
})


app.post('/posts',(request,response)=>{
    postsHandler.postsPOST(request,response);
})