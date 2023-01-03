import mongoose from "mongoose";
import { config } from "dotenv";

config();
const name = process.env.NAME;
const password = process.env.PASSWORD
const database = process.env.DB
mongoose.connect(`mongodb+srv://${name}:${password}@cluster0.5qang.mongodb.net/${database}?`);

let db = mongoose.connection;

export default db;