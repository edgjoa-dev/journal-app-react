import { singInWhitGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice"


export const checkingAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWhitGoogle();
        console.log({result});
    }
}