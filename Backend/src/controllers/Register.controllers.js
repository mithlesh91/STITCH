import jwt from "jsonwebtoken"
import UserModel from "../models/user.models.js"
import config from "../Config/config.js"

const generateToken = async (user, res,message) => {

    const tokens = jwt.sign({
        id: user._id,

    }, config.JWT, { expiresIn: "7d" })

    res.cookie("token", tokens)

    res.status(200).json({
        message,
        success: true,
        user: {
            user: user._id,
            fullname: user.fullname,
            Email: user.Email,
            contact: user.contact
        }
    })
        console.log("JWT_SECRET:", config.JWT)

}


export async function register(req, res) {

    try {

        const { fullname, Email, password, contact,isSeller } = req.body

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
            fullname, Email, password, contact,role:isSeller?"seller":"buyer"
        })

        // const token = jwt.sign({
        //     id: user._id,
        //     Email: user.Email
        // }, config.JWT)



        // res.cookie("token", token)

        // res.status(200).json({
        //     message: "user is register successfully",
        //     user,
        //     token
        // })

        await generateToken(user,res, "user is register successfully")

    } catch (error) {
        console.log(error)
    }

}