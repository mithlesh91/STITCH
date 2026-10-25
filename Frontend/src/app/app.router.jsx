import { createBrowserRouter } from "react-router"
import Register from "../Features/Auth/Pages/Register"
import Login from "../Features/Auth/Pages/Login"
import ProductCreate from "../Features/Products/pages/ProductCreate"
import ProtectedRoute from "../Features/components/ProtectedRoute"

export const router = createBrowserRouter([

  // ── Public routes ──────────────────────────────────────────────
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
  },

  // ── Protected routes (require authentication) ──────────────────
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/create-product",
        element: <ProductCreate />
      }
    ]
  }

])