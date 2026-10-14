import jwt from "jsonwebtoken"
import UserModel from "../models/user.models.js"
import config from "../Config/config.js"

const generateToken = async (user, res, message) => {

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
}


export async function register(req, res) {
    try {
        const { fullname, Email, password, contact, isSeller } = req.body
        const userExist = await UserModel.findOne({
            $or: [
                { Email },
                { contact }
            ]
        })
        if (userExist.length > 0) {
            return res.status(409).json({
                message: "Email or contact already exists"
            })
        }

        const user = await UserModel.create({
            fullname, Email, password, contact, role: isSeller ? "seller" : "buyer"
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

        await generateToken(user, res, "user is register successfully")

    } catch (error) {
        console.error("Registration failed:", error)
        return res.status(500).json({
            message: "Registration failed. Please try again."
        })
    }

}

export async function login(req, res) {
    const { Email, contact, password } = req.body

    const user = await UserModel.findOne({
        $or: [
            { Email },
            { contact }
        ]
    })

    if (!user) {
        return res.status(401).json({
            message: "email and password incorrect"
        })
    }

    const ismatch = await user.comparePassword(password)
    if (!ismatch) {
        return res.status(401).json({
            message: "email and password incorrect"
        })
    }
    await generateToken(user, res, "user is logined successfully")

}

export async function googleAuth(req, res) {
    const { emails, displayName, id } = req.user
    const email = emails?.[0]?.value

    if (!email) {
        return res.status(400).json({
            message: "Google account did not provide an email address"
        })
    }

    let user = await UserModel.findOne({
        $or: [{ Email: email }, { googleId: id }]
    })

    if (!user) {
        user = await UserModel.create({
            Email: email,
            googleId: id,
            fullname: displayName
        })
    }

    const token = jwt.sign({ id: user._id }, config.JWT, { expiresIn: "7d" })
    res.cookie("token", token)

    res.redirect("http://localhost:5173/")
}