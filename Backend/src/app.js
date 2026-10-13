import express from "express"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"
import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import config from "./Config/config.js"
import userRouter from "./routers/user.router.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(passport.initialize())
passport.use(new GoogleStrategy({
    clientID: config.CLINTID,
    clientSecret: config.SECRET,
    callbackURL: '/api/auth/google/callback',

}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile)

})),

    console.log("Google OAuth configuration:", {
        clientIDLoaded: Boolean(config.CLINTID),
        clientSecretLoaded: Boolean(config.SECRET),
        clientIDFormatValid:
            typeof config.CLINTID === "string" &&
            config.CLINTID.endsWith(".apps.googleusercontent.com"),
    });


app.use("/api", userRouter)


export default app