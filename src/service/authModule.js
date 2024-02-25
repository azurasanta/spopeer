import app from "../config/firebase-config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { SERVER } from "../config/constant"

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()
const githubProvider = new GithubAuthProvider()

const auth = getAuth(app);

export const socialMediaAuth = async (provider, cridential) => {
    let service;
    switch (provider) {
        case "google":
            service = googleProvider
            break;
        case "facebook":
            service = facebookProvider
            break;
        case "github":
            service = githubProvider
            break;
        default:
    }

    const rst = await signInWithPopup(auth, service)

    return rst.user
};

export const emailAuth = async (mode, cridential) => {
    switch (mode) {
        case "signup":
            const rst = await createUserWithEmailAndPassword(auth, cridential.email, "12345678")
            console.log(rst.user)
            return rst.user
        case "signin":
            const { user } = await signInWithEmailAndPassword(auth, cridential.email, "12345678")
            const idToken = await user.getIdToken();

            // send idToken to backend
            const response = await fetch(`${SERVER}/api/auth/verifyToken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idToken: idToken }),
            })
            
            const message = await response.text()
            console.log(message)

            return user
        default:
    }
}