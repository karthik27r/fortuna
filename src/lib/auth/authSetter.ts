let isAuthenticated = false;

export const isUserAuthenticated = () => isAuthenticated;

export const setUserAuthenticated = (value: boolean) => {
    isAuthenticated = value;
    console.log('setUserAuthenticated success');
};