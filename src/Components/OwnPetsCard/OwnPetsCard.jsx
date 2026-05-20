import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { RequestModal } from '../RequestModal/RequestModal';

const OwnPetsCard = ({ ownpets }) => {


    return (
        <div>
            <Card variant="" className={'rounded-md  '}>
                <Image src={ownpets?.imageUrl} className='w-full object-cover rounded-md h-[230px]' height={230} width={250} alt={ownpets?.petName}></Image>

                <Card.Header className=' items-center  justify-between'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem] text-white'>{ownpets?.petName}</Card.Title>
                        <Card.Description className='text-gray-400'>{ownpets.breed} .{ownpets?.species} </Card.Description>
                        <p>{ownpets?.status}</p>
                        <h3 className='text-[1.10rem] text-[#b38b6d]'>${ownpets?.adoptionFee}/Adoption Fee</h3>

                        <div className=' grid grid-cols-2 '>
                            <Button>View</Button>
                            <Button>Edit</Button>
                            <RequestModal _id={ownpets?._id}></RequestModal>
                            <Button>Deleted</Button>

                        </div>

                    </div>
                </Card.Header>
            </Card>
        </div>
    );
};

export default OwnPetsCard;