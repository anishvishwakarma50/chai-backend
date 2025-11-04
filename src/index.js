import dotenv from "dotenv";

import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "./constants.js"
dotenv.config({
    path:"./.env"
})

import connectDB from "./db/index.js";

const app = express();

connectDB()




/*
// this is the first approach of connecting to Database.
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=> {
            console.log("Error:" + error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server Started and listening on http://127.0.0.1:${process.env.PORT}`)
        })
    }
    catch (error) {
        console.error("Error: "+ error);
        throw error;
    }
})()
*/