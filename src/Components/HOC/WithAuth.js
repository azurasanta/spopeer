import { useAuth } from "../context/authContext";
import { Navigate } from 'react-router-dom';

const WithAuth = (Component) => {

    const AuthRoute = () => {
        const auth = useAuth()
        if (auth.currentUser) {
            return <Component />
        }
        else {
            return <Navigate to="/signin" />
        }
    }

    return AuthRoute;
}

export default WithAuth