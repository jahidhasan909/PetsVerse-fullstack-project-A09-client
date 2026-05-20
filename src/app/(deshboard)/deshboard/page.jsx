
import React from 'react';
import { Button, Card, Table } from "@heroui/react";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import ListingAlter from '@/Components/ListingCancelAlter/ListingCancelAlert';


const DeshBoardHomePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user


    const res = await fetch(`http://localhost:8000/adopt?email=${user?.email}`)
    const adoptPetInformation = await res.json()









    return (
        <div className='my-26 container mx-auto px-20'>
            <h1 className='text-3xl font-bold'>My Adoption Requests</h1>
            <p className='text-gray-500 pb-5 pt-2'>Keep track of your pet adoption requests.</p>


            <div className='grid grid-cols-4 gap-2 my-5'>
                <Card className='bg-white/40 border border-white/40 text-center'>
                    <h1 className='font-semibold text-lg'>{adoptPetInformation.length}</h1>
                    <p className='text-gray-500'>Total</p>
                </Card>
                <Card className='bg-white/40 border border-white/40 text-center'>
                    <h1 className='text-orange-300 font-semibold text-lg'>{adoptPetInformation.filter(statuss => statuss.status === 'pending').length}</h1>
                    <p className='text-gray-500'>Pending</p>
                </Card>
                <Card className='bg-white/40 border border-white/40 text-center'>
                    <h1 className='text-green-500 font-semibold text-lg'>{adoptPetInformation.filter(statuss => statuss.status === 'approved').length}</h1>
                    <p className='text-gray-500'>Approved</p>
                </Card>
                <Card className='bg-white/40 border border-white/40 text-center'>
                    <h1 className='text-red-400 font-semibold text-lg'>{adoptPetInformation.filter(statuss => statuss.status === 'rejected').length}</h1>
                    <p className='text-gray-500'>Rejected</p>
                </Card>
            </div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Pet Name</Table.Column>
                            <Table.Column>Request Date</Table.Column>
                            <Table.Column>Pickup Date</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column className={'pl-40'}>Actions</Table.Column>
                        </Table.Header>
                        <Table.Body className={''}>
                            {
                                adoptPetInformation.map(apotpets =>

                                    <Table.Row  key={apotpets._id}>

                                        <Table.Cell>{apotpets.petsName}</Table.Cell>
                                        <Table.Cell>{apotpets.createdAt}</Table.Cell>
                                        <Table.Cell>{apotpets.adoptionDate}</Table.Cell>
                                        <Table.Cell>{apotpets.status}</Table.Cell>
                                        <Table.Cell className={'flex gap-3 pl-40'}>
                                            <Link href={`/allpets/${apotpets?.petsId}`}><Button variant='outline'>View</Button></Link>
                                            {
                                                apotpets.status !== "adopted" &&
                                                apotpets.status !== "approved" && (
                                                    <ListingAlter apotpets={apotpets}></ListingAlter>
                                                )
                                            }
                                        </Table.Cell>

                                    </Table.Row>
                                )
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default DeshBoardHomePage;