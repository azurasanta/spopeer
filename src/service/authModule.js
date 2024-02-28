import app from "../config/firebase-config";
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification, createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
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
    const { email } = cridential
    switch (mode) {
        case "signup":
            const fetchMechod = await fetchSignInMethodsForEmail(auth, email)
            // already registered email
            if (fetchMechod.length > 0)
                return {
                    user: null,
                    message: `${email} already registered!`
                }
            
            
            createUserWithEmailAndPassword(auth, email, "12345678")
            .then((credential) => {
                sendEmailVerification(credential.user)
                .then(()=>{
                    console.log("Verification email sent");
                })
                .catch((error) => {
                    console.error("Error sending verification email:", error);
                })
            })
            // const res2 = fetch(`${SERVER}/api/auth/signup`, {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ email: email })
            // })

            // if (res2.status == 200) return rst.user
            // else throw new Error("Creating Emaiil Verification")
            break
        case "signin":
            const { user } = await signInWithEmailAndPassword(auth, email, "12345678")
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