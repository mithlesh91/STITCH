import { seterror, setloading, setuser } from "../state/Auth.state.js"
import register from "../service/auth.api.js"
import { useDispatch } from "react-redux"

export const AuthHook = () => {
    const dispatch = useDispatch()
    const registeruser = async ({ fullname, Email, password, contact, isSeller }) => {
        try {
            dispatch(setloading(true))
            const response = await register(fullname, Email, password, contact, isSeller)
            dispatch(setuser(response.user))
            dispatch(setloading(false))
            return { success: true, message: "User registered successfully" }
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.message || error?.user || "Registration failed";
            dispatch(seterror(errorMessage))
            throw error;
        }finally{
            dispatch(setloading(false))
        }
    }
    return {
        registeruser
    }
}       