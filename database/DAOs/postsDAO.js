import{db} from'../index.js';

export async function getAllPosts(){
    try{

        let result = await db.all('SELECT * FROM posts');
        return result;
    }catch(e){
        console.error(e)
    }
}


export async function insertPost(post){
    try{
        await  db.run('INSERT INTO posts (id,postName,link) VALUES (?,?,?)',post.id,post.postName,post.link)
        return true;
    }catch(e){
        console.error(e)
        return false;
    }
}

export async function checkPostLink(link){
    let result =await db.get('SELECT link FROM posts WHERE link=?',link);
    return result;

}