import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import app from "../../config/firebase-config";

const AuthContext = createContext({
    token: null,
    userId: null,
    isLoggedIn: false,
    login: (userId, token) => { },
    logout: () => { },
});

export function useAuth() {
    return useContext(AuthContext)
}

const auth = getAuth(app);

export function AuthProvider({ children }) {
    // const [currentUser, setCurrentUser] = useState(null)
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            // const storedData = JSON.parse(localStorage.getItem('userData'));
            // if (storedData && storedData.token) {
            //     loginUserHandler(storedData.userId, storedData.token);
            // }
        })

        return () => unsubscribe();
    }, [])


    const loginUserHandler = useCallback((userId, token) => {
        setUserId(userId);
        setToken(token);
        localStorage.setItem('userData', JSON.stringify({ userId, token }));
    }, []);

    const logoutUserHandler = useCallback(() => {
        setUserId(null);
        setToken(null);
        localStorage.removeItem('userData');
        signOut()
    }, []);

    const initialValues = {
        userId: userId,
        token: token,
        isLoggedIn: !!token,
        login: loginUserHandler,
        logout: logoutUserHandler,
        auth: auth
    };

    return (
        <AuthContext.Provider value={initialValues}>
            {children}
        </AuthContext.Provider>
    )
}