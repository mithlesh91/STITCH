
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in .env file");
}
if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET is missing in you env file")
}

const config = Object.freeze({
    URI: process.env.MONGO_URI,
    JWT:process.env.JWT_SECRET
});

export default config;
