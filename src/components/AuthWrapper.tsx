import React from 'react';

type AuthWrapperProps = {
    children: React.ReactNode;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <div>Please log in to access this content.</div>;
    }

    return <>{children}</>;
};

export default AuthWrapper;