import { Router } from "express"
import { identifyuser } from "../Middleware/auth.middleware.js";
import { productcontroller } from "../controllers/Product.controllers.js";
import { productvalidation } from "../Validator/Register.validator.js";
import multer from "multer"

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

const productRouter = Router()

productRouter.post("/product", identifyuser,upload.array("images", 7),productvalidation,productcontroller)

export default productRouter