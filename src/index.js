import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getAllArchives } from './services/filesServices.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('up and running');
});