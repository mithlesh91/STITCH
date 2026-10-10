import  { Router } from "express"
import { register } from "../controllers/Register.controllers.js"
import { Rvalidation } from "../Validator/Register.validator.js"

const RegisterRouter = Router()


RegisterRouter.post("/register",Rvalidation,register)

export default RegisterRouter