import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from "../../config/firebase-config";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const auth = getAuth(app);

export function AuthProvider({ children }) {
    // const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log(user)
        })

        return () => unsubscribe();
    }, [])

    const value = auth

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}