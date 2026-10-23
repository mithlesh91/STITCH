import {configureStore} from "@reduxjs/toolkit"
import Authslic from "../Features/Auth/state/Auth.state.js"
import productSlice from "../Features/Products/state/product.slice.js"

 export const store = configureStore({
    // reducer:Authslic,
    // reducer:productSlice
    reducer:{
        auth:Authslic,
        product:productSlice
    }
})