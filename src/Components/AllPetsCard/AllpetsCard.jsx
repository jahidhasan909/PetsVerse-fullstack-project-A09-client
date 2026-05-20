import { ArrowUpRight, LocationArrow } from '@gravity-ui/icons';
import { Button, Card, Chip } from '@heroui/react';
import { IconPaw, IconPoint } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllpetsCard = ({ pet }) => {



    const { _id, ownerEmail, petName, species, breed, age, gender, adoptionFee, imageUrl, healthStatus, vaccinationStatus, location, Description, ownerId, status, } = pet



    return (
        <div>
            <Card variant="" className={'rounded-md  bg-white/30 border-white/30 border'}>
                <Image src={imageUrl} className='w-full object-cover relative overflow-hidden rounded-md h-[230px]' height={230} width={250} alt={petName}></Image>
                <p className=" absolute p-2 text-md">{status === 'Available' ? <Chip color="success">{status}</Chip> : status === 'panding' ? <Chip color="warning">{status}</Chip> : <Chip color="success">{status}</Chip>}</p>
                <Card.Header className='p-2'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem]'>{petName}</Card.Title>
                        <Card.Description className='text-gray-500 flex truncate'>{breed} <IconPoint stroke={2} /> {age} <IconPoint stroke={2} /> {gender} </Card.Description>
                        <span className="flex items-center gap-1 text-sm"><LocationArrow></LocationArrow> {location}</span>
                        <h3 className='text-[1.10rem]'>${adoptionFee}/Adoption Fee</h3>

                        <div className="flex gap-2">

                            <Link href={`/allpets/${_id}`} className='flex items-center gap-1 underline'>
                                View Details
                                <ArrowUpRight />
                            </Link>
                            <Link href={`/allpets/${_id}`} className='no-underline flex items-center gap-1  text-[#b38b6d]'>
                                <Button variant="outline" className={'bg-white/30 border-white/40 font-semibold'}>
                                    Adopt Now
                                    <IconPaw stroke={2} />
                                </Button>

                            </Link>
                        </div>
                    </div>
                </Card.Header>
            </Card>
        </div>
    );
};

export default AllpetsCard;