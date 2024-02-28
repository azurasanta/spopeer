import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/authContext"



const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth();

    return (
            auth.currentUser ? <Component /> : <Navigate to="/signin" /> 
    )
}

export default PrivateRoute