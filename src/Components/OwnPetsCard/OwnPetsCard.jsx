import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { RequestModal } from '../RequestModal/RequestModal';
import Link from 'next/link';
import MyListingAlertDeletd from '../MyListingAlert/MyLIstingAlertDelete';
import EditModal from '../EditModal/EditModal';
import { IconPaw, IconPoint } from '@tabler/icons-react';
import { ArrowUpRight, LocationArrow } from '@gravity-ui/icons';

const OwnPetsCard = ({ ownpets }) => {


    return (
        <div>
            <Card variant="" className={'rounded-md  bg-[#FCF8F3] dark:bg-black border-white/30 border'}>
                <Image src={ownpets?.imageUrl} className='w-full object-cover relative overflow-hidden rounded-md h-[230px]' height={230} width={250} alt={ownpets?.petName}></Image>

                <p className=" absolute p-2 text-md"> {ownpets?.status === 'approved' ? (
                    <Chip className='text-green-500' color="success">
                        {ownpets?.status}
                    </Chip>
                ) : ownpets?.status === 'pending' ? (
                    <Chip className="text-orange-400" color="warning">
                        {ownpets?.status}
                    </Chip>
                ) : (
                    <Chip className="text-green-500" color="success">
                        {ownpets?.status}
                    </Chip>
                )}</p>

                <Card.Header className='p-2'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem]'>{ownpets?.petName}</Card.Title>
                        <Card.Description className='text-gray-500 flex truncate'>{ownpets?.breed} <IconPoint stroke={2} /> {ownpets?.age} <IconPoint stroke={2} /> {ownpets?.gender} </Card.Description>
                        <span className="flex items-center gap-1 text-sm"><LocationArrow></LocationArrow> {ownpets?.location}</span>
                        <h3 className='text-[1.10rem]'><span className='font-semibold'>${ownpets?.adoptionFee}</span> <span className='text-gray-500'>/ Adoption Fee</span></h3>



                        <div className=' grid grid-cols-2 gap-2 mt-3'>
                            <Link href={`/allpets/${ownpets._id}`} className='flex items-center gap-1 underline'>
                                <Button className={'bg-gray-200 border-white/40 w-full'} variant='outline'>View<ArrowUpRight /></Button>
                            </Link>

                            <EditModal ownpets={ownpets}></EditModal>
                            <RequestModal _id={ownpets?._id}></RequestModal>
                            <MyListingAlertDeletd ownpets={ownpets}></MyListingAlertDeletd>

                        </div>


                    </div>
                </Card.Header>
            </Card>
        </div >
    );
};

export default OwnPetsCard;