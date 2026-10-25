import axios from "axios"

const productApi = axios.create({
    baseURL: "/api"
})

export async function createProduct(formdata) {
    try {
        const response = await productApi.post('/product', formdata)
        return response
    } catch (error) {
        console.log(error)
    }

}

export async function getallprocduct() {
    try {
        const response = await productApi.get("/get/products")
        return response
    } catch (error) {
        console.log(error)
    }
}