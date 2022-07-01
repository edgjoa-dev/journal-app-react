import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWhitGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {

        const res = await createUserWithEmailAndPassword( FirebaseAuth, email, password, );
        const { uid, photoURL } = res.user;
        console.log(res);

        return {
            ok:true,
            uid, email, photoURL, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok:false, errorMessage: error.message}
    }
}