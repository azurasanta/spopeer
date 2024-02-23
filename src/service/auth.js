import app from "../config/firebase-config";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()
const githubProvider = new GithubAuthProvider()

const auth = getAuth(app);

const socialMediaAuth = async (provider) => {
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

  signInWithPopup(auth, service)
    .then((res) => {
      console.log("------------------")
      return res.user;
    })
    .catch((err) => {
      console.log(err)
      return err;
    });
};

export default socialMediaAuth;