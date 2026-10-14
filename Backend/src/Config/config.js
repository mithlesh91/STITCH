
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in .env file");
}
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in you env file")
}
// const googleClientId = process.env.GOOGLE_CLINT_ID
// const googleClientSecret =  process.env.GOOGLE_CLINT_SECRET

if (!process.env.GOOGLE_CLINT_ID) {
    throw new Error("Google client ID is missing in your .env file")
}

if (!process.env.GOOGLE_CLINT_SECRET) {
    throw new Error("Google client secret is missing in your .env file")
}

const config = Object.freeze({
    URI: process.env.MONGO_URI,
    JWT: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLINT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLINT_SECRET,
    NODE_ENV:process.env.NODE_ENV == "devlopment"
});

export default config;
