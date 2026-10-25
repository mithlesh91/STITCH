
import jwt from "jsonwebtoken";
import config from "../Config/config.js";
import UserModel from "../models/user.models.js";

export async function identifyuser(req, res, next) {
    try {

        console.log("Protected URL:", req.originalUrl);
        console.log("Cookies:", req.cookies);
        console.log("Token:", req.cookies?.token);

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }

        const decode = jwt.verify(token, config.JWT);

        const user = await UserModel.findById(decode.id);

        if (!user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        if (user.role !== "seller") {
            return res.status(403).json({
                message: "Forbidden: Seller access required",
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Authentication error:", error.message);

        return res.status(401).json({
            message: "Invalid token",
        });
    }
}
