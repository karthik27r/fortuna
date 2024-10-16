import React, { useEffect, useState } from 'react';
import { isUserAuthenticated } from '@/lib/auth/authSetter';
import Login from '@/pages/Login/Login';
import { initializeAuth } from '@/lib/auth/authOperations';
import Sidebar from '@/components/sidebar/Sidebar';

type AuthWrapperProps = {
    children: React.ReactNode;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            await initializeAuth();
            setIsAuthenticated(isUserAuthenticated());
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Login />;
    }

    return (<>{children}</>);
};

export default AuthWrapper;