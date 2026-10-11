import { seterror, setloading, setuser } from "../state/Auth.state.js"
import register from "../service/auth.api.js"
import { useDispatch } from "react-redux"

export const AuthHook = () => {
    const dispatch = useDispatch()
    const registeruser = async ({ fullname, Email, password, contact, isSeller = false }) => {
        try {
            dispatch(setloading(true))
            const response = await register(fullname, Email, password, contact, isSeller)
            dispatch(setuser(response.user))
            dispatch(setloading(false))
            return { success: true, message: "User registered successfully" }
        } catch (error) {
            dispatch(seterror(error.response.data))
            dispatch(setloading(false))
            return { success: false, message: error.response.data }
        }
    }
    return {
        registeruser
    }
}       