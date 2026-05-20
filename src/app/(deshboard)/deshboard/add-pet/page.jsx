'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';


import { FaWpforms } from "react-icons/fa6";

import { authClient } from '@/lib/auth-client';

const AddPetListing = () => {

    const { data, isPending } = authClient.useSession()




    const user = data?.user




    if (isPending) {
        return <h1>loading..</h1>
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

        const res = await fetch('http://localhost:8000/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(allPetsInformationPost)
        })

        const data = await res.json()

        console.log(data,'data');
        

    }



return (
    <div className='container mx-auto mt-35 mb-20'>
        <h1 className='font-bold text-xl lg:text-3xl mb-5 mt-2 pl-20 text-white'>Add New Pet for Adoption</h1>
        <Card className='rounded-md shadow-md  max-w-7xl mx-auto'>
            <form

                onSubmit={onSubmit}
                className="p-10 space-y-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Owner Email (Auto-filled read only) */}
                    <div className="md:col-span-2">
                        <TextField name="ownerEmail" isReadOnly defaultValue={user?.email}>
                            <Label className=''>Owner Email (Read Only)</Label>
                            <Input className="rounded-md " />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Pet Name */}
                    <TextField name="petName" isRequired>
                        <Label className=''>Pet Name</Label>
                        <Input placeholder="e.g., Rocky" className="rounded-md " />
                        <FieldError />
                    </TextField>

                    {/* Species */}
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

                    {/* Breed */}
                    <TextField name="breed" isRequired>
                        <Label className=''>Breed</Label>
                        <Input placeholder="e.g., Golden Retriever / Local" className="rounded-md " />
                        <FieldError />
                    </TextField>

                    {/* Age */}
                    <TextField name="age" isRequired>
                        <Label className=''>Age</Label>
                        <Input placeholder="e.g., 2 Years / 5 Months" className="rounded-md " />
                        <FieldError />
                    </TextField>

                    {/* Gender */}
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

                    {/* Adoption Fee */}
                    <TextField name="adoptionFee" type="number" isRequired>
                        <Label className=''>Adoption Fee (USD)</Label>
                        <Input
                            type="number"
                            placeholder="0 for Free Adoption"
                            className="rounded-md "
                        />
                        <FieldError />
                    </TextField>

                    {/* Image URL */}
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

                    {/* Health Status */}
                    <TextField name="healthStatus" isRequired>
                        <Label className=''>Health Status</Label>
                        <Input placeholder="e.g., Healthy, Regular Checkup" className="rounded-md " />
                        <FieldError />
                    </TextField>

                    {/* Vaccination Status */}
                    <TextField name="vaccinationStatus" isRequired>
                        <Label className=''>Vaccination Status</Label>
                        <Input placeholder="e.g., Fully Vaccinated / Not Vaccinated" className="rounded-md " />
                        <FieldError />
                    </TextField>

                    {/* Location */}
                    <div className="md:col-span-2">
                        <TextField name="location" isRequired>
                            <Label className=''>Location</Label>
                            <Input placeholder="e.g., New York, NY" className="rounded-md " />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
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

                {/* Buttons */}
                <div className='flex items-center gap-2'>
                    <Button
                        type="submit"
                        variant="outline"
                        className="rounded-md bg-linear-to-r from-[#b38b6d] to-[#af8068] text-white"
                    >
                        <FaWpforms />
                        List Pet for Adoption
                    </Button>
                </div>
            </form>
        </Card>
    </div>
)
}

export default AddPetListing;