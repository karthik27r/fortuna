import {setUserAuthenticated } from "@/lib/auth/authSetter";

const TOKEN_KEY = 'auth_token';

export const setAuthToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    console.log('setAuthToken success');
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUserAuthenticated(false);
};
