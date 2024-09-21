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

import { validateEmail, validatePassword, validateRequiredText } from '@/lib/validator';
import { useForm } from "react-hook-form";

interface formTypeProps {
    setFormType: (formType: string) => void;
}

const SignUpForm: React.FC<formTypeProps> = ({ setFormType }) => {

    const [errors, setErrors] = useState<{ email?: string; password?: string; firstName?: string; lastName?: string; }>({});

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: any) => {
        const emailError = validateEmail(data.email);
        const passwordError = validatePassword(data.password);
        const firstNameError = validateRequiredText(data.firstName);
        const lastNameError = validateRequiredText(data.lastName);

        if (emailError || passwordError || firstNameError || lastNameError) {
            setErrors({
                email: emailError || "",
                password: passwordError || "",
                firstName: firstNameError || "",
                lastName: lastNameError || "",
            });
            return;
        }

        console.log("Form submitted:", data);
    };


    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-4xl font-retrofunk tracking-wider text-primary">fortuna</CardTitle>
                <CardTitle className="text-xl mt-4 flex">Create an account</CardTitle>
                <CardDescription className="flex">
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Max" {...field} />
                                        </FormControl>
                                        {errors.firstName && <FormMessage >{errors.firstName}</FormMessage>}

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Robinson" {...field} />
                                        </FormControl>
                                        {errors.lastName && <FormMessage >{errors.lastName}</FormMessage>}
                                    </FormItem>
                                )}
                            />
                        </div>
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
                            Create an account
                        </Button>
                    </form>
                </Form>
                <div className="mt-4">
                    <Button variant="outline" className="w-full">
                        Sign In with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a className="underline" onClick={() => setFormType("signin")}>
                        Sign in
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUpForm;