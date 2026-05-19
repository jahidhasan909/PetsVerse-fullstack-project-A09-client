"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";



const RegistrationPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget)
        const newUserData = Object.fromEntries(formdata.entries())

        const { name, password,confirmpassword } = newUserData

        if (password !== confirmpassword) {
           return toast.error('password not match')
            
        }

        const { data, error } = await authClient.signUp.email({
            name: newUserData?.name,
            password: newUserData?.password,
            // confirmpassword: newUserData?.confirmpassword,
            image: newUserData?.image,
            email: newUserData?.email
        })

        console.log(data,'data');
        console.log(error,'error')

    }





    return (
        <div className=" container mx-auto  my-20">
            <Card className="max-w-2xl mx-auto">
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
                        <Button className={'w-full'} type="submit">
                            <Check />
                            Create Account
                        </Button>
                    </div>
                </Form>
                <span className="text-center text-neutral-400">Already have an account? <Link href={'/login'}><span className="text-[#b38b6d] font-semibold">Log In</span></Link></span>
            </Card>
        </div>
    );
};

export default RegistrationPage;