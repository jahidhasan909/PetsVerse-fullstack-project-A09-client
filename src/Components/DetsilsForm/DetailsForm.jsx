"use client"
import React, { useState } from 'react';
import { Form, TextField, Label, Input, FieldError, Description, Button, Card, DateField, Calendar } from "@heroui/react";
import { IconHeart, IconUser, IconMail, IconCalendar, IconPaw } from "@tabler/icons-react";
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { DotSpinner } from 'ldrs/react';


const DetailsForm = ({ expectedPets }) => {


    const { data, isPending } = authClient.useSession()


    const [adoptionDate, setAdoptionDate] = useState(null)

    const user = data?.user


    const isOwner = user?.email === expectedPets?.ownerEmail

    const isAdopted = expectedPets?.status === 'adopted';

    const handleAdoptionClick = () => {
        if (isAdopted) {
            return toast.error('This pet is already adopted!')
        }
    }

    if (isOwner) {
        return (
            <div className='h-full  flex items-center justify-center border rounded-xl'>
                <h2 className='text-xl font-semibold'>
                    This is your posted pet
                </h2>
            </div>
        )
    }

    if (isPending) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <DotSpinner

                    size="40"
                    speed="0.9"
                    color="black"
                />
            </div>
        )
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const petsadopt = Object.fromEntries(formData.entries());


        const adoptInfo = {


            petsId: expectedPets?._id,
            petsName: expectedPets?.petName,
            petsImage: expectedPets?.imageUrl,


            ownerEmail: expectedPets?.ownerEmail,
            ownerName: expectedPets?.ownerName,


            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,


            adoptionDate: new Date(adoptionDate),
            message: petsadopt.message,


            status: "pending",


            createdAt: new Date()
        };

        const { data: token } = await authClient.token()

        const res = await fetch('https://pets-verse-fullstack-project-a09-se.vercel.app/adopt', {

            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearar ${token?.token}`
            },

            body: JSON.stringify(adoptInfo)

        });

        const postresult = await res.json();

        // console.log(postresult);

        const { data: tokenData } = await authClient.token()

        const respatch = await fetch(

            `https://pets-verse-fullstack-project-a09-se.vercel.app/allpets/${expectedPets?._id}`,

            {

                method: "PATCH",

                headers: {
                    "content-type": "application/json",
                    authorization: `Bearar ${tokenData?.token}`
                },

                body: JSON.stringify({

                    status: "pending"

                })

            }

        );

        const patchresult = await respatch.json()

        // console.log(patchresult);

        if (patchresult) {
            toast.success('Adoption request sent successfully !')
        }





    };

    return (
        <div className="w-full">
            <Card className="w-full  bg-[#FCF8F3] dark:bg-black border-white/40 border rounded-2xl shadow-none p-6">


                <div className="flex gap-3 items-center pb-4 border-b border-black">

                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-black ">
                            Request to Adopt {expectedPets?.petName}
                        </h2>
                        <p className="text-sm text-neutral-500">
                            Fill out this form and the owner will review your request.
                        </p>
                    </div>
                </div>


                <Form
                    className="flex flex-col gap-6 py-6 w-full"
                    render={(props) => <form {...props} data-custom="adoption-form" />}
                    onSubmit={onSubmit}
                >


                    <TextField name="petName" defaultValue={`${expectedPets?.petName}`} className="flex flex-col gap-1.5 w-full">
                        <Label className="text-black font-semibold text-sm">Pet Name</Label>
                        <div className="relative flex items-center">
                            <Input
                                readOnly
                                className="w-full border border-black bg-neutral-100 px-3 py-2 rounded-lg text-neutral-600 font-medium text-sm outline-none"
                            />
                        </div>
                    </TextField>
                    <TextField name="username" defaultValue={user?.name} className="flex flex-col gap-1.5 w-full">
                        <Label className="text-black font-semibold text-sm">Your Name</Label>
                        <div className="relative flex items-center">
                            <Input
                                readOnly
                                className="w-full border border-black bg-neutral-100 px-3 py-2 rounded-lg text-neutral-600 font-medium text-sm outline-none"
                            />
                        </div>
                    </TextField>


                    <TextField name="email" defaultValue={user?.email} className="flex flex-col gap-1.5 w-full">
                        <Label className="text-black font-semibold text-sm">Your Email</Label>
                        <div className="relative flex items-center">
                            <Input
                                readOnly
                                className="w-full border border-black bg-neutral-100 px-3 py-2 rounded-lg text-neutral-600 font-medium text-sm outline-none"
                            />
                        </div>
                    </TextField>


                    <DateField onChange={setAdoptionDate} className="" name="date">
                        <Label className=''>Pickup Date</Label>
                        <DateField.Group className={'border'}>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            <DateField.Suffix>
                                <Calendar className="size-4 text-muted" />
                            </DateField.Suffix>
                        </DateField.Group>
                    </DateField>



                    <TextField
                        name="message"
                        className="flex flex-col gap-1.5 w-full"
                    >
                        <Label className="text-black font-semibold text-sm">Message to Owner</Label>

                        <textarea
                            name="message"
                            placeholder="Tell the owner why you'd be a great match ..."
                            rows={4}
                            className="w-full border  p-3 rounded-lg text-black text-sm bg-white focus:border-neutral-700 outline-none transition-colors resize-y min-h-[90px]"
                        />
                        <Description className="text-xs text-neutral-400">Optional: Write a short note to the pet owner.</Description>
                        <FieldError className="text-xs text-red-600 mt-1" />
                    </TextField>


                    <div className="flex gap-3 w-full mt-2">
                        <Button
                            onClick={handleAdoptionClick}
                            type="submit"
                            className="flex-1 bg-[#D97706]  font-bold text-md py-6 rounded-lg  transition-colors border border-white/40 flex items-center justify-center gap-2"
                        >
                            <IconPaw size={18} />
                            Adopt {expectedPets?.petName}
                        </Button>
                    </div>

                </Form>
            </Card>
        </div >
    );
};

export default DetailsForm;