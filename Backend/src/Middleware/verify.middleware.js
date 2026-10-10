import jwt from "jsonwebtoken"
import config from "../Config/config.js"


export async function verifyuser(req, res, next) {


    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                message: "invalid token"
            })
        }
        const decode = jwt.verify(token, config.JWT)
        req.user = decode
        next()

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

