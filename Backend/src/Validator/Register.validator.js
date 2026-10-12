import { body, validationResult } from "express-validator";

const validation = (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(401).json({
            message: error.array()
        })
    }
    next()
}

export const Rvalidation = ([
    body("fullname").trim().isString().isLength({ min: 3 }).withMessage("fullname is required"),
    body("Email").isEmail().withMessage("email is must required"),
    body("password").trim().isLength({ min: 6, max: 12 }).withMessage("password is must required"),
    body("contact").trim().matches(/^[6-9]\d{9}$/).withMessage("Enter a valid 10-digit Indian mobile number"),
    body("isSeller").isBoolean().withMessage("isSeller is must be bullean"),    
    validation

])

export const loginvalidate = ([
    body("Email").isEmail().withMessage("email is must required"),
    body("password").trim().isLength({ min: 6, max: 12 }).withMessage("password is must required"),
    body("contact").trim().matches(/^[6-9]\d{9}$/).withMessage("Enter a valid 10-digit Indian mobile number"),
    validation

])