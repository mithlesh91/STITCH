import mongoose from "mongoose";
import config from "./config.js";


export async function dbconnect() {
    try {
        await mongoose.connect(config.URI)
        console.log("db is connected")
    } catch (error) {
      console.log(error)
    }

}