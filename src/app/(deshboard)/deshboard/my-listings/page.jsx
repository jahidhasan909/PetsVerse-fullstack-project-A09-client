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



    const res = await fetch(`http://localhost:8000/ownpetslisting/${user?.id}`)
    const ownListingpets = await res.json()
    console.log(ownListingpets, 'ownlisting');




    return (
        <div>
            <div className='flex'>
                <Card>
                    <p> total listin</p>
                    <p>{ownListingpets.length}</p>
                </Card>
                <Card>
                    Available
                    <p>{ownListingpets.filter(ownstatus => ownstatus.status === 'Available').length}</p>
                </Card>
                <Card>
                    adopted
                </Card>
            </div>

            <div className='grid grid-cols-4'>
                {
                    ownListingpets.map(ownpets => <OwnPetsCard key={ownpets._id} ownpets={ownpets}></OwnPetsCard>)
                }
            </div>


        </div>
    );
};

export default MyListingPage;