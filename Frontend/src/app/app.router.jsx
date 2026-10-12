import { createBrowserRouter } from "react-router"
import Register from "../Features/Auth/Pages/Register"

export const router = createBrowserRouter([

  {
    path: "/",
    element: <p>hello snitch</p>
  },
  {
    path: "/register",
    element: <Register />
  }

])