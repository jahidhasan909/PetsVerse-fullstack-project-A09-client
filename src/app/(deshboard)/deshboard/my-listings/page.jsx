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

            {
                ownListingpets.map(ownpets => <Card key={ownpets._id}>
                    <h1>{ownpets.petName}</h1>
                    <p>{ownpets.status}</p>
                </Card>)
            }


        </div>
    );
};

export default MyListingPage;