import {createBrowserRouter} from "react-router"
import Register from "../Features/Auth/Pages/Register"

export const router = createBrowserRouter([
   
    {
        path:"/",
        element:<h1>welcome of app</h1>
    },
    {
        path:"/register",
        element:<Register/>
    }

])