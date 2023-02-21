import { Navigate, useLocation } from "react-router-dom"
import useSession from "../../hooks/useSession"

const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const { authToken } = useSession()

    if (!authToken) {
        // Si no existe el authToken enviar al login page "/".
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
}

export default ProtectedRoute
