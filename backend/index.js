import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()

// configuring port
const PORT = process.env.PORT || 3000;

const app = express();

// configuring connection to DB
async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
    } catch (error) {
        console.log(error);
    }
};

connectToDb();

const db = mongoose.connection;

db.on("error", () => console.error("Mongo Connection Error"));
db.once("open", () => console.log("Database Connected"));

app.use(express.json()); // for parsing application/json request
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});