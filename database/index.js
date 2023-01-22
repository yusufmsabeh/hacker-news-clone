import path from 'path';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export let db;
export async function openDatabase(){
    try{

    // Opening Database
         db = await open({
            filename:path.join(__dirname,'database.db'),
            driver:sqlite3.Database
        });
    // foreign_keys validation
        db.get("PRAGMA foreign_keys = ON")
    // add migrate folder
        await db.migrate({
            migrationsPath: path.join(__dirname,'migrations')
        });
       
    }catch(e){
        console.error("Failed to open database"+e)
    }


}