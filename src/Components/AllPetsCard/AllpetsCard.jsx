import { ArrowUpRight } from '@gravity-ui/icons';
import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllpetsCard = ({ pet }) => {



    const { _id, ownerEmail, petName, species, breed, age, gender, adoptionFee, imageUrl, healthStatus, vaccinationStatus, location, Description, ownerId, status, } = pet



    return (
        <div>
            <Card variant="" className={'rounded-md  '}>
                <Image src={imageUrl} className='w-full object-cover rounded-md h-[230px]' height={230} width={250} alt={petName}></Image>

                <Card.Header className=' items-center  justify-between'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem] text-white'>{petName}</Card.Title>
                        <Card.Description className='text-gray-400'>{breed} . {age} . {gender} </Card.Description>
                        <span>{location}</span>
                        <p>{status}</p>
                        <h3 className='text-[1.10rem] text-[#b38b6d]'>${adoptionFee}/Adoption Fee</h3>
                        

                        <Link href={`/allpets/${_id}`} className='flex items-center gap-1 underline text-[#b38b6d]'>
                            View Details
                            <ArrowUpRight />
                        </Link>
                        <Link href={``} className='flex items-center gap-1 underline text-[#b38b6d]'>
                            Adopt Now
                            <ArrowUpRight />
                        </Link>
                    </div>
                </Card.Header>
            </Card>
        </div>
    );
};

export default AllpetsCard;