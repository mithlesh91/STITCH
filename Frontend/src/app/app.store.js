import {configureStore} from "@reduxjs/toolkit"
import Authslic from "../Features/Auth/state/Auth.state.js"

 export const store = configureStore({
    reducer:Authslic
})