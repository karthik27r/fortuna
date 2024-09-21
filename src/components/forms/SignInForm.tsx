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

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { validateEmail, validatePassword } from '@/lib/validator';
import { useForm } from "react-hook-form";
import { setUserAuthenticated } from "@/lib/auth/authSetter";
import { setAuthToken } from '@/lib/auth/authTokenization';
import { signInSuccessfulOperation } from "@/lib/auth/authOperations";


interface formTypeProps {
    setFormType: (formType: string) => void;
}

const SignInForm: React.FC<formTypeProps> = ({ setFormType }) => {

    const [errors, setErrors] = useState<{ email?: string; password?: string; firstName?: string; lastName?: string; }>({});

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: any) => {
        const emailError = validateEmail(data.email);

        if (emailError) {
            setErrors({
                email: emailError || "",
            });
            return;
        }

        try {
            signInSuccessfulOperation();
            console.log("Login Successful");
        } catch (error) {
            console.error("Login failed", error);
        }
    }; 


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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    {errors.email && <FormMessage>{errors.email}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    {errors.password && <FormMessage>{errors.password}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>
                    </form>
                </Form>
                <div className="mt-4">
                    <Button variant="outline" className="w-full">
                        Sign In with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <a className="underline" onClick={() => setFormType("signup")}>
                        Sign Up
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignInForm;