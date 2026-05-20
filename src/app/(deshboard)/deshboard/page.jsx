
import React from 'react';
import { Button, Table } from "@heroui/react";
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
        <div>
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
                        <Table.Body>
                            {
                                adoptPetInformation.map(apotpets =>

                                    <Table.Row key={apotpets._id}>

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