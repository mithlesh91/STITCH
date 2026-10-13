
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in .env file");
}
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in you env file")
}
if (!process.env.GOOGLE_CLINT_ID) {
    throw new Error("Google Clint id is missing in your env file")
}

if (!process.env.GOOGLE_CLINT_SECRET) {
    throw new Error("Google clientsecret is missing in your env file")
}

const config = Object.freeze({
    URI: process.env.MONGO_URI,
    JWT: process.env.JWT_SECRET,
    SECRET: process.env.GOOGLE_CLINT_SECRET,
    CLINTID: process.env.GOOGLE_CLINT_ID
});

export default config;
