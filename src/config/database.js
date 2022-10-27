import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
let database = null;
const mongoclient = new MongoClient(process.env.MONGO_URI);
try {
	await mongoclient.connect();
	database = mongoclient.db('nodejs-challenge');
	console.log('Connected to database!');
} catch (err) {
	console.log(err);
}

export default database;