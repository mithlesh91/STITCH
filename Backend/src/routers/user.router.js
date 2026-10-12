import  { Router } from "express"
import { register,login } from "../controllers/user.controllers.js"
import { Rvalidation,LoginValidation } from "../Validator/Register.validator.js"

const userRouter = Router()


userRouter.post("/register",Rvalidation,register)
userRouter.post("/login",LoginValidation,login)

export default userRouter