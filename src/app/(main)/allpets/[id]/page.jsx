import DetailsForm from '@/Components/DetsilsForm/DetailsForm';

import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';




const DetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:8000/allpets/${id}`)
    const expectedPets = await res.json()




    return (
        <div className='my-20 grid grid-cols-2'>
            <Card variant="" className={'rounded-md  '}>
                <Image src={expectedPets?.imageUrl} className='w-full object-cover rounded-md h-[230px]' height={230} width={250} alt={expectedPets?.petName}></Image>

                <Card.Header className=' items-center  justify-between'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem] text-white'>{ }</Card.Title>
                        <Card.Description className='text-gray-400'>{expectedPets?.breed} . {expectedPets?.age} . {expectedPets?.gender} </Card.Description>
                        <span>{expectedPets?.location}</span>
                        <p>{expectedPets?.status}</p>
                        <h3 className='text-[1.10rem] text-[#b38b6d]'>${expectedPets?.adoptionFee}/Adoption Fee</h3>


                    </div>
                </Card.Header>
            </Card>

            <div>

                <DetailsForm expectedPets={expectedPets}></DetailsForm>

            </div>
        </div>
    );
};

export default DetailsPage;