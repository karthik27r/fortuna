import React, { useState } from "react";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { validateEmail, validatePassword } from '@/lib/validator';


interface formTypeProps {
        setFormType: (formType: string) => void;
    }
    
const LoginForm: React.FC<formTypeProps> = ({ setFormType }) => {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
            <CardTitle className="text-4xl font-retrofunk tracking-wider text-primary">fortuna</CardTitle>
            <CardTitle className="text-xl mt-4 flex"> Sign-In to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a className="underline" onClick={() => setFormType('signup')}>
                        Sign up to fortuna
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}

const SignUpForm: React.FC<formTypeProps> = ({ setFormType }) => {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
            <CardTitle className="text-4xl font-retrofunk tracking-wider text-primary">fortuna</CardTitle>
            <CardTitle className="text-xl mt-4 flex">Create an account</CardTitle>
                <CardDescription className="flex" >
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Max" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Robinson" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                        Sign up with GitHub
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a className="underline" onClick={() => setFormType('login')}>
                        Sign in
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}

const Login: React.FC = () => {
    const [formType, setFormType] = useState('login');

    return (
        <div>
            {formType === 'login' ? <LoginForm setFormType={setFormType}/> : <SignUpForm setFormType={setFormType} />}
        </div>
    );
};

export default Login;