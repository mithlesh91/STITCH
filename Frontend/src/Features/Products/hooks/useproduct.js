import { createProduct, getallprocduct } from "../service/Product.api.js"
import { setproduct } from "../state/product.slice.js"
import { useDispatch } from "react-redux"

export const useProduct = () => {
    const dispatch = useDispatch()

    async function handlecreateproduct(formdata) {
        try {
            const data = await createProduct(formdata)
            return data?.product
        } catch (error) {
            console.error("Failed to create product:", error?.response?.data || error.message)
        }
    }

    async function handlegetallproduct() {
        try {
            const data = await getallprocduct()
            dispatch(setproduct(data?.products))
        } catch (error) {
            console.error("Failed to fetch products:", error?.response?.data || error.message)
        }
    }

    return {
        handlecreateproduct,
        handlegetallproduct
    }
}