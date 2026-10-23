import { createProduct, getallprocduct } from "../service/Product.api.js"
import { setproduct } from "../state/product.slice.js"
import { useDispatch } from "react-redux"

export const useProduct = () => {
    const dispatch = useDispatch()

    async function handlecreateproduct(formdata) {
        const data = await createProduct(formdata)
        return data.product
    }

    async function handlegetallproduct() {
        const data = getallprocduct()
        dispatch(setproduct(data.products))
    }
    return {
        handlecreateproduct,
        handlegetallproduct
    }
}