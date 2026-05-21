'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';


import { FaWpforms } from "react-icons/fa6";

import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

import { useRef } from 'react';
import { MdClear } from 'react-icons/md';
import { DotSpinner } from 'ldrs/react'
import 'ldrs/react/DotSpinner.css'
import { IconPaw } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const AddPetListing = () => {



    const formRef = useRef(null)
    const router = useRouter()



    const { data, isPending } = authClient.useSession()




    const user = data?.user




    if (isPending) {
        return (
            <div className='flex justify-center items-center'>

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
        const newPetsAdd = Object.fromEntries(formData.entries())





        const allPetsInformationPost = {
            ...newPetsAdd,
            ownerId: user?.id,
            ownerEmail: user?.email,
            status: "Available"

        }
         const { data:token } =await  authClient.token()

        const res = await fetch('https://pets-verse-fullstack-project-a09-se.vercel.app/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization:`Bearar ${token?.token}`
            },
            body: JSON.stringify(allPetsInformationPost)
        })

        const data = await res.json()

        if (data) {
            toast.success('pets successfully added')
            router.push('/deshboard/my-listings')
        }


    }



    return (
        <div className='container mx-auto my-20 '>
            <h1 className='font-bold text-xl lg:text-3xl  mt-2 lg:pl-13 text-black text-center'>Add New Pet for Adoption</h1>
            <p className='text-gray-500 lg:pl-13 mb-7 pt-2 text-center lg:text-[0.94rem]'>Add a loving pet and help them find a forever home.</p>
            <Card className='rounded-md shadow-md  max-w-7xl mx-auto bg-[#FCF8F3] dark:bg-black border-white/40 border'>
                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    className="p-10 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="md:col-span-2">
                            <TextField name="ownerEmail" isReadOnly defaultValue={user?.email}>
                                <Label className=''>Owner Email (Read Only)</Label>
                                <Input className="rounded-md " />
                                <FieldError />
                            </TextField>
                        </div>

                        <TextField name="petName" isRequired>
                            <Label className=''>Pet Name</Label>
                            <Input placeholder="e.g., Rocky" className="rounded-md " />
                            <FieldError />
                        </TextField>

                   
                        <div>
                            <Select
                                name="species"
                                isRequired
                                className="w-full"
                                placeholder="Select species"
                            >
                                <Label className=''>Species</Label>
                                <Select.Trigger className="rounded-md ">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className={''}>
                                    <ListBox>
                                        <ListBox.Item id="Dog" textValue="Dog" className=''>
                                            Dog
                                            <ListBox.ItemIndicator className='' />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cat" textValue="Cat" className=''>
                                            Cat
                                            <ListBox.ItemIndicator className='' />
                                        </ListBox.Item>
                                        <ListBox.Item id="Bird" textValue="Bird" className=''>
                                            Bird
                                            <ListBox.ItemIndicator className='' />
                                        </ListBox.Item>
                                        <ListBox.Item id="Rabbit" textValue="Rabbit" className=''>
                                            Rabbit
                                            <ListBox.ItemIndicator className='' />
                                        </ListBox.Item>
                                        <ListBox.Item id="Other" textValue="Other" className=''>
                                            Other
                                            <ListBox.ItemIndicator className='' />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        <TextField name="breed" isRequired>
                            <Label className=''>Breed</Label>
                            <Input placeholder="e.g., Golden Retriever / Local" className="rounded-md " />
                            <FieldError />
                        </TextField>

                      
                        <TextField name="age" isRequired>
                            <Label className=''>Age</Label>
                            <Input placeholder="e.g., 2 Years / 5 Months" className="rounded-md " />
                            <FieldError />
                        </TextField>

                        <div>
                            <Select
                                name="gender"
                                isRequired
                                className="w-full"
                                placeholder="Select gender"
                            >
                                <Label className=''>Gender</Label>
                                <Select.Trigger className="rounded-md ">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className={''}>
                                    <ListBox>
                                        <ListBox.Item id="Male" textValue="Male" className=''>
                                            Male
                                            <ListBox.ItemIndicator className='text-white' />
                                        </ListBox.Item>
                                        <ListBox.Item id="Female" textValue="Female" className=''>
                                            Female
                                            <ListBox.ItemIndicator className='' />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                  
                        <TextField name="adoptionFee" type="number" isRequired>
                            <Label className=''>Adoption Fee (USD)</Label>
                            <Input
                                type="number"
                                placeholder="0 for Free Adoption"
                                className="rounded-md "
                            />
                            <FieldError />
                        </TextField>

                        <div className="md:col-span-2">
                            <TextField name="imageUrl" type="url" isRequired>
                                <Label className=''>Image URL (imgbb/postimage)</Label>
                                <Input
                                    type="url"
                                    placeholder="https://i.ibb.co/your-image-id.jpg"
                                    className="rounded-md "
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        <TextField name="healthStatus" isRequired>
                            <Label className=''>Health Status</Label>
                            <Input placeholder="e.g., Healthy, Regular Checkup" className="rounded-md " />
                            <FieldError />
                        </TextField>

                   
                        <TextField name="vaccinationStatus" isRequired>
                            <Label className=''>Vaccination Status</Label>
                            <Input placeholder="e.g., Fully Vaccinated / Not Vaccinated" className="rounded-md " />
                            <FieldError />
                        </TextField>

                      
                        <div className="md:col-span-2">
                            <TextField name="location" isRequired>
                                <Label className=''>Location</Label>
                                <Input placeholder="e.g., New York, NY" className="rounded-md " />
                                <FieldError />
                            </TextField>
                        </div>

                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className=''>Description</Label>
                                <TextArea
                                    placeholder="Describe the pet's personality, behavior, habits..."
                                    className="rounded-md "
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-7'>
                        <Button onClick={
                            () => formRef.current.reset()
                        } variant='outline' className={'text-red-400  border-red-300 w-full'}>
                            <MdClear></MdClear>
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="outline"

                            className=" bg-linear-to-r bg-[#D97706] text-white border-white/92  w-full"
                        >
                            <IconPaw stroke={2} />
                            Add Pet Listing
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default AddPetListing;