import { seterror, setloading, setuser } from "../state/Auth.state.js"
import { register, login } from "../service/auth.api.js"
import { useDispatch } from "react-redux"

export const AuthHook = () => {
    const dispatch = useDispatch()
    const registeruser = async ({ fullname, Email, password, contact, isSeller }) => {
        try {
            dispatch(setloading(true))
            const response = await register(fullname, Email, password, contact, isSeller)
            dispatch(setuser(response.user))
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.message || error?.user || "Registration failed";
            dispatch(seterror(errorMessage))
            throw error;
        } finally {
            dispatch(setloading(false))
        }
    }
    const loginuser = async ({ Email, contact, password }) => {
        try {
            dispatch(setloading(true))
            const data = await login(Email, contact, password)
            dispatch(setuser(data.user))
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.message || error?.user || "login failed";
            dispatch(seterror(errorMessage))
            throw error;
        } finally {
            dispatch(setloading(false))

        }
    }

    return {
        registeruser, loginuser
    }
}       