import React, { useState } from "react";

import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";

const Login: React.FC = () => {
    const [formType, setFormType] = useState('login');

    return (
        <div>
            {formType === 'signin' ? <SignInForm setFormType={setFormType} /> : <SignUpForm setFormType={setFormType} />}
        </div>
    );
};

export default Login;