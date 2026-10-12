import axios from "axios";

const authapi = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export default async function register(fullname, Email, password, contact, isSeller) {
    const response = await authapi.post("/register", { fullname, Email, password, contact, isSeller })
    return response.data
}