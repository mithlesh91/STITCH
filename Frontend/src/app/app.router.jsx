import { createBrowserRouter } from "react-router"
import Register from "../Features/Auth/Pages/Register"
import Login from "../Features/Auth/Pages/Login"

export const router = createBrowserRouter([

  {
    path: "/",
    element: <p>hello snitch</p>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }

])