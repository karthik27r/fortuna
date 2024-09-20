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

    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

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
  
      if (emailError || passwordError) {
        setErrors({
          email: emailError || "",
          password: passwordError || "",
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
                    <FormMessage />
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
                    <FormMessage />
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
                  {errors.email && <p className="text-red-600">{errors.email}</p>}
                  <FormMessage />
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
                  {errors.password && <p className="text-red-600">{errors.password}</p>}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a className="underline" onClick={() => setFormType("login")}>
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