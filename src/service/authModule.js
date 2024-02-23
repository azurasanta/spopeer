import app from "../config/firebase-config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

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
                return user
        default:
    }
}