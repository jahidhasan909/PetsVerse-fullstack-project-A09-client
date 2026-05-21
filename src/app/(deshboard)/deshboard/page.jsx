
import React from 'react';
import { Button, Card, Chip, Table } from "@heroui/react";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import ListingAlter from '@/Components/ListingCancelAlter/ListingCancelAlert';


const DeshBoardHomePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const token = await auth.api.getToken({
        headers: await headers()

    })

    const user = session?.user


    const res = await fetch(`https://pets-verse-fullstack-project-a09-se.vercel.app/adopt?email=${user?.email}`, {

        headers: {
            authorization: `Barear ${token?.token}`
        }

    })
    const adoptPetInformation = await res.json()









    return (
        <div className='my-26 container mx-auto lg:px-20'>
            <h1 className='text-3xl font-bold'>My Adoption Requests</h1>
            <p className='text-gray-500 pb-5 pt-2'>Keep track of your pet adoption requests.</p>


            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 my-5'>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <h1 className='font-semibold text-lg'>{adoptPetInformation.length}</h1>
                    <p className='text-gray-500'>Total</p>
                </Card>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <h1 className='text-orange-300 font-semibold text-lg'>{adoptPetInformation.filter(statuss => statuss.status === 'pending').length}</h1>
                    <p className='text-gray-500'>Pending</p>
                </Card>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <h1 className='text-green-500 font-semibold text-lg'>{adoptPetInformation.filter(statuss => statuss.status === 'approved').length}</h1>
                    <p className='text-gray-500'>Approved</p>
                </Card>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <h1 className='text-red-400 font-semibold text-lg'>{adoptPetInformation.filter(statuss => statuss.status === 'rejected').length}</h1>
                    <p className='text-gray-500'>Rejected</p>
                </Card>
            </div>



            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">


                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 border-b border-gray-200">
                            <tr>
                                <th className="px-5 py-4 font-semibold">Pet Name</th>
                                <th className="px-5 py-4 font-semibold">Request Date</th>
                                <th className="px-5 py-4 font-semibold">Pickup Date</th>
                                <th className="px-5 py-4 font-semibold">Status</th>
                                <th className="px-5 py-4 font-semibold">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {adoptPetInformation.map((apotpets) => (
                                <tr
                                    key={apotpets._id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="px-5 py-4">
                                        {apotpets.petsName}
                                    </td>

                                    <td className="px-5 py-4">
                                        {new Date(
                                            apotpets.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="px-5 py-4">
                                        {new Date(
                                            apotpets.adoptionDate
                                        ).toLocaleDateString()}
                                    </td>

                                    <p className="absolute top-0 right-0 p-2 text-md">{apotpets?.status === 'Available' ? <Chip className='text-green-500' color="success">{apotpets?.status}</Chip> : apotpets?.status === 'panding' ? <Chip className="text-orange-400" color="warning">{apotpets?.status}</Chip> : <Chip color="success">{apotpets?.status}</Chip>}</p>

                                    <td className="px-5 py-4">
                                        <div className="flex gap-2">
                                            <Link href={`/allpets/${apotpets?.petsId}`}>
                                                <Button variant='outline' className="px-4 py-2">
                                                    View
                                                </Button>
                                            </Link>

                                            {apotpets.status !== "adopted" &&
                                                apotpets.status !== "approved" && (
                                                    <ListingAlter apotpets={apotpets} />
                                                )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:hidden">

                    {adoptPetInformation.map((apotpets) => (
                        <div
                            key={apotpets._id}
                            className="
                    border border-gray-200
                    rounded-2xl
                    p-4
                    space-y-3
                    bg-white
                "
                        >

                            <div className="flex justify-between gap-3">
                                <span className="font-semibold text-gray-500">
                                    Pet
                                </span>

                                <span className="text-right font-medium">
                                    {apotpets.petsName}
                                </span>
                            </div>

                            <div className="flex justify-between gap-3">
                                <span className="font-semibold text-gray-500">
                                    Request
                                </span>

                                <span className="text-right text-sm">
                                    {new Date(
                                        apotpets.createdAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="flex justify-between gap-3">
                                <span className="font-semibold text-gray-500">
                                    Pickup
                                </span>

                                <span className="text-right text-sm">
                                    {new Date(
                                        apotpets.adoptionDate
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="flex justify-between gap-3">
                                <span className="font-semibold text-gray-500">
                                    Status
                                </span>

                                <span className="capitalize">
                                    {apotpets.status}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 pt-2">

                                <Link
                                    href={`/allpets/${apotpets?.petsId}`}
                                    className="w-full"
                                >
                                    <Button
                                        variant='outline'
                                        className=" w-full px-4 py-2 border"
                                    >
                                        View
                                    </Button>
                                </Link>

                                {apotpets.status !== "adopted" &&
                                    apotpets.status !== "approved" && (
                                        <ListingAlter apotpets={apotpets} />
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeshBoardHomePage;