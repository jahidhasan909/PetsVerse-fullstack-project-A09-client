import OwnPetsCard from '@/Components/OwnPetsCard/OwnPetsCard';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const MyListingPage = async () => {



    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    const token = await auth.api.getToken({
        headers: await headers()

    })


    const res = await fetch(`http://localhost:8000/ownpetslisting/${user?.id}`, {
        headers: {
            authorization: `Barear ${token?.token}`
        }
    })
    const ownListingpets = await res.json()
    // console.log(ownListingpets, 'ownlisting');




    return (
        <div className='my-20 container mx-auto lg:px-15'>
            <h1 className='text-center text-3xl font-bold'>My Listings</h1>
            <p className='text-center text-gray-500 text-[0.94rem] pt-2 pb-5'>View and manage all the pets you’ve added for adoption.</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <p className='font-semibold text-lg'>{ownListingpets.length}</p>
                    <p className='text-gray-500'>Total Listings</p>
                </Card>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <p className='font-semibold text-lg text-green-500'>{ownListingpets.filter(ownstatus => ownstatus.status === 'Available').length}</p>
                    <p className='text-gray-500'>Available</p>
                </Card>
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/40 text-center'>
                    <p className='font-semibold text-lg text-red-400'>{ownListingpets.filter(ownstatus => ownstatus.status === 'adopted').length}</p>
                    <span className='text-gray-500'>Adopted</span>
                </Card>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    ownListingpets.map(ownpets => <OwnPetsCard key={ownpets._id} ownpets={ownpets}></OwnPetsCard>)
                }
            </div>


        </div>
    );
};

export default MyListingPage;