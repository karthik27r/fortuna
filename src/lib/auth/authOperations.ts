import { setUserAuthenticated } from "./authSetter";
import { setAuthToken, getAuthToken} from "./authTokenization";

export const signInSuccessfulOperation = () => {
    try{
        const token = 'true';
        setUserAuthenticated(true);
        setAuthToken(token);
        console.log('signInSuccessfulOperation success');
    }catch(e){
        console.log('Failed to authenticate user');
    }

};

export const checkAuthStatus = () => {
    const token = getAuthToken();
    if (token) {
        // Here you might want to verify the token's validity
        // For now, we'll assume if a token exists, the user is authenticated
        setUserAuthenticated(true);
    } else {
        setUserAuthenticated(false);
    }
};

// Call this function when your app initializes
export const initializeAuth = async () => {
    const token = getAuthToken();
    if (token) {
        // Here you might want to verify the token's validity with your backend
        // For now, we'll assume if a token exists, the user is authenticated
        try {
            // Simulating an API call to validate the token
            await new Promise(resolve => setTimeout(resolve, 100));
            setUserAuthenticated(true);
        } catch (error) {
            console.error("Failed to validate token", error);
            setUserAuthenticated(false);
        }
    } else {
        setUserAuthenticated(false);
    }
};