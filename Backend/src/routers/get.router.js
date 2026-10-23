import { Router } from "express";
import { identifyuser } from "../Middleware/auth.middleware.js";
import { getproduct } from "../controllers/productget.controllers.js";
const getRouter = Router()

getRouter.get("/get/products",identifyuser,getproduct)

export default getRouter