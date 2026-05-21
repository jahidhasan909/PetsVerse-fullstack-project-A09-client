"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";



const RegistrationPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget)
        const newUserData = Object.fromEntries(formdata.entries())

        const { password, confirmpassword } = newUserData

        if (password !== confirmpassword) {
            return toast.error('password not match')

        }

        const { data, error } = await authClient.signUp.email({
            name: newUserData?.name,
            password: newUserData?.password,
            image: newUserData?.image,
            email: newUserData?.email
        })

        if (data) {
            toast.success('SingUp Successful !')
            redirect('/login')
        }

        if (error) {
            toast.warning(error.message)
        }


    }





    return (
        <div className=" container mx-auto mt-27 mb-14 ">
            <h1 className="text-center font-black text-3xl">Create Your Account</h1>
            <p className="text-center text-gray-500 text-[0.95rem] pb-5 pt-3">Join PetsVerse and start your journey to finding and caring for your perfect companion.</p>
            <Card className="max-w-2xl mx-auto bg-white/40 border border-white/40">
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"

                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter Your name" />
                        <FieldError />
                    </TextField>



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
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        name="image"
                        type="url"

                    >
                        <Label>Photo URL </Label>
                        <Input placeholder="https://.." />
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
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={6}
                        name="confirmpassword"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Confirm Password</Label>
                        <Input placeholder="Enter your Confirm Password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="">
                        <Button variant="outline" className={'w-full bg-[#D97706] text-white border-white/50 border'} type="submit">
                            <Check />
                            Create Account
                        </Button>
                    </div>
                </Form>
                <span className="text-center text-neutral-400">Already have an account? <Link href={'/login'}><span className="text-[#D97706] font-semibold">Log In</span></Link></span>
            </Card>
        </div>
    );
};

export default RegistrationPage;