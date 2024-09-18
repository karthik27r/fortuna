// Dashboard.tsx
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';

const Dashboard: React.FC = () => {
    return (
        <AuthWrapper>
            <div>
                <h1>Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </div>
        </AuthWrapper>
    );
};

export default Dashboard;