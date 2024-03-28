import { useAuth } from "../context/authContext";
import { Navigate } from 'react-router-dom';

const WithAuth = (Component) => {
    const AuthRoute = () => {
        const {auth, isLoggedIn} = useAuth()
        const userData = localStorage.getItem("userData");

        if (userData) {
            return <Component />
        }
        else {
            return <Navigate to="/signin" />
        }
    }

    return AuthRoute;
}

export default WithAuth