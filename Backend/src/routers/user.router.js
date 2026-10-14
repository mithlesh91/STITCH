import  { Router } from "express"
import passport from "passport"
import { register,login,googleAuth } from "../controllers/user.controllers.js"
import { Rvalidation,LoginValidation } from "../Validator/Register.validator.js"
import { config } from "dotenv"

const userRouter = Router()


userRouter.post("/register",Rvalidation,register)
userRouter.post("/login",LoginValidation,login)
userRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

userRouter.get('/auth/google/callback',passport.authenticate('google',
    { session: false,failureRedirect:config.NODE_ENV == "devlopment" ? "http://localhost:5173/login":"/login" }
), googleAuth)

export default userRouter