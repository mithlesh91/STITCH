import jwt from "jsonwebtoken"
import UserModel from "../models/user.models.js"
import config from "../Config/config.js"

// const generateToken = (user)=>{
// return jwt.sign({
//     id:user._id,
//     Email:Email.user

//     },config.JWT_SECRET,{expiresIn:"7d"})
// }


export async function register(req, res) {

    try {

        const { name, Email, password, contact } = req.body

        const userExist = await UserModel.find({
            $or: [
                { Email },
                { contact }
            ]
        })
        if (!userExist) {
            console.log("Email or contact already exists");
            return res.status(401).json({
                message: "user is alrady exits"
            })
        }

        const user = await UserModel.create({
            name, Email, password, contact
        })

        const token = jwt.sign({
            id: user._id,
            Email: user.Email
        }, config.JWT)

        // const token = generateToken(user)

        res.cookie("token", token)

        res.status(200).json({
            message: "user is register successfully",
            user,
            token
        })
    } catch (error) {
        console.log(error)
    }

}