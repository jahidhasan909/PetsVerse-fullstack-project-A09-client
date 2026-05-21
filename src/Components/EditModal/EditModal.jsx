"use client"
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from '@heroui/react';
import React from 'react';
import { MdEditLocationAlt } from 'react-icons/md';
import { CiSaveUp2 } from "react-icons/ci";
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';







const EditModal = ({ ownpets }) => {




    const { data, isPending } = authClient.useSession()

    const user = data?.user

    if (isPending) {
        return <h1>loading..</h1>
    }






    const { _id, ownerEmail, petName, species, breed, age, gender, adoptionFee, imageUrl, healthStatus, vaccinationStatus, location, Description, ownerId, status, } = ownpets
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newEditPetDetails = Object.fromEntries(formData.entries())
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`http://localhost:8000/ownpetslisting/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearar ${tokenData?.token}`
            },
            body: JSON.stringify(newEditPetDetails)
        })

        const data = await res.json()

        if (data) {
            toast.success('Update Update pets information !')
            window.location.reload()

        }



    }




    return (
        <div>
            <Modal className={''}>
                <Button className={'w-full bg-[#D97706] text-white border-white/40'} variant='outline'><MdEditLocationAlt /> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md md:max-w-3xl rounded-md border ">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading className='flex items-center gap-1 font-bold text-xl text-white'><span className='text-[#b38b6d]'><MdEditLocationAlt /></span> Update Travel Package</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
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
                                        <TextField defaultValue={petName} name="petName" isRequired>
                                            <Label className=''>Pet Name</Label>
                                            <Input placeholder="e.g., Rocky" className="rounded-md " />
                                            <FieldError />
                                        </TextField>

                                        {/* Species */}
                                        <div>
                                            <Select
                                                defaultValue={species}
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
                                        <TextField defaultValue={breed} name="breed" isRequired>
                                            <Label className=''>Breed</Label>
                                            <Input placeholder="e.g., Golden Retriever / Local" className="rounded-md " />
                                            <FieldError />
                                        </TextField>

                                        {/* Age */}
                                        <TextField defaultValue={age} name="age" isRequired>
                                            <Label className=''>Age</Label>
                                            <Input placeholder="e.g., 2 Years / 5 Months" className="rounded-md " />
                                            <FieldError />
                                        </TextField>

                                        {/* Gender */}
                                        <div>
                                            <Select
                                                defaultValue={gender}
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
                                        <TextField defaultValue={adoptionFee} name="adoptionFee" type="number" isRequired>
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
                                            <TextField defaultValue={imageUrl} name="imageUrl" type="url" isRequired>
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
                                        <TextField defaultValue={healthStatus} name="healthStatus" isRequired>
                                            <Label className=''>Health Status</Label>
                                            <Input placeholder="e.g., Healthy, Regular Checkup" className="rounded-md " />
                                            <FieldError />
                                        </TextField>

                                        {/* Vaccination Status */}
                                        <TextField defaultValue={vaccinationStatus} name="vaccinationStatus" isRequired>
                                            <Label className=''>Vaccination Status</Label>
                                            <Input placeholder="e.g., Fully Vaccinated / Not Vaccinated" className="rounded-md " />
                                            <FieldError />
                                        </TextField>

                                        {/* Location */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={location} name="location" isRequired>
                                                <Label className=''>Location</Label>
                                                <Input placeholder="e.g., New York, NY" className="rounded-md " />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={Description} name="description" isRequired>
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

                                            Save Pet for Adoption
                                        </Button>
                                    </div>
                                </form>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModal;