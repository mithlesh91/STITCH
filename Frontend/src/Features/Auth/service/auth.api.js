import axios from "axios";

const authapi = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export async function register(fullname, Email, password, contact, isSeller) {
    try {
        const response = await authapi.post("/register", { fullname, Email, password, contact, isSeller })
        return response.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function login(Email, contact, password) {
    try {
        const response = await authapi.post("/login", { Email, contact, password })
        return response.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}