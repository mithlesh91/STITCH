import  { Router } from "express"
import { register,login } from "../controllers/user.controllers.js"
import { Rvalidation,loginvalidate } from "../Validator/Register.validator.js"

const userRouter = Router()


userRouter.post("/register",Rvalidation,register)
userRouter.post("/login",loginvalidate,login)

export default userRouter