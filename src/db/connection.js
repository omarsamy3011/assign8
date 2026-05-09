import { MongoClient } from 'mongodb'

export const url = 'mongodb://localhost:27017'
export const client = new MongoClient(url)

export const dbname = 'test'

export async function dbconnection() {
    await client.connect();
    console.log('Connected successfully to database');
    return 'done.';
    }

export const db = client.db(dbname);
export const collection = db.collection('users');