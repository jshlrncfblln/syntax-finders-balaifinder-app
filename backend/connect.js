import mysql from "mysql";
import * as dotenv from 'dotenv';

dotenv.config();

//IMPORTANT TIGNAN MO SA .ENV FILE KUNG LOCAL O LIVE DB BA YUNG GAGAMITIN MO

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DNAME,
});