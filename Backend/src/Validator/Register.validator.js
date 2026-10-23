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




export const LoginValidation = [
    body().custom((value, { req }) => {
        const email = req.body.Email?.trim();
        const contact = req.body.contact?.toString().trim();

        if (!email && !contact) {
            throw new Error("Email or contact is required");
        }

        if (email && contact) {
            throw new Error("Enter either email or contact, not both");
        }

        return true;
    }),

    body("Email")
        .if(body("Email").exists({ checkFalsy: true }))
        .isEmail()
        .withMessage("Enter a valid email"),

    body("contact")
        .if(body("contact").exists({ checkFalsy: true }))
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Enter a valid 10-digit mobile number"),

    body("password")
        .notEmpty()
        .withMessage("Password is required"),

    validation
];


export const productvalidation = [
    body("title")
        .notEmpty()
        .withMessage("Enter the title"),

    body("discription")
        .notEmpty()
        .withMessage("Enter the description"),

    validation
];
