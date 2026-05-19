"use client";
import { FcGoogle } from "react-icons/fc";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";



const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget)
        const newUserData = Object.fromEntries(formdata.entries())



        const { data, error } = await authClient.signIn.email({
            password: newUserData?.password,
            email: newUserData?.email,

        })

        console.log(data, 'data');
        console.log(error, 'error')
    }

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div>
            <div className="max-w-2xl mx-auto mt-35 mb-20 ">
                <h1 className="text-center text-3xl font-bold ">Welcome Back</h1>
                <p className="text-center text-neutral-400 mt-2 mb-5 text-[1.10rem]"></p>
                <Card className=" rounded-md my-3 ">

                    <Form className="max-w-2xl flex flex-col gap-4 p-2 " onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="">Email</Label>
                            <Input className={'rounded-md'} placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }

                                return null;
                            }}
                        >
                            <Label className="">Password</Label>
                            <Input className={'rounded-md '} placeholder="Enter your password" />
                            <FieldError />
                        </TextField>

                        <Button type="submit" variant="outline" className={'bg-linear-to-r from-[#b38b6d] to-[#af8068] rounded-md w-full text-white'}>
                            Log In
                        </Button>

                    </Form>
                    <div className="flex justify-center items-center gap-3 mx-2">
                        <Separator className="bg-white/20" />
                        <div className=" whitespace-nowrap text-neutral-400">
                            Or continue with
                        </div>
                        <Separator className="bg-white/20" />
                    </div>
                    <Button onClick={handleGoogleLogin} variant="outline" className={'w-full rounded-md text-white bg-[#272738af]  border-white/20'}>
                        <FcGoogle />
                        Log In With Google
                    </Button>

                    <span className="text-center text-neutral-400"><span>{"Don't have an account?"}</span> <Link href={'/singup'}><span className="text-[#b38b6d] font-semibold">Register</span></Link></span>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;