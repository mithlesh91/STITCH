import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

/**
 * ProtectedRoute
 * Wraps routes that require the user to be authenticated.
 * - If authenticated  → renders the child routes via <Outlet />
 * - If NOT authenticated → redirects to /login
 *
 * Usage in router (nested layout route):
 *   {
 *     element: <ProtectedRoute />,
 *     children: [
 *       { path: "/dashboard", element: <Dashboard /> },
 *       ...
 *     ]
 *   }
 */
const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth)

  return user ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
