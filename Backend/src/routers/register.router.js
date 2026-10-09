import  { Router } from "express"
import { register } from "../controllers/Register.controllers.js"

const RegisterRouter = Router()

RegisterRouter.post("/register",register)

export default RegisterRouter