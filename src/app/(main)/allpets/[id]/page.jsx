import DetailsForm from "@/Components/DetsilsForm/DetailsForm";
import { Calendar, HeartPulse, MapPin, PawPrint, Shield, Syringe, User, } from "lucide-react";
import { headers } from 'next/headers';

import { Card, Button, Chip } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "@/lib/auth";

const DetailsPage = async ({ params }) => {
    const { id } = await params;


    const token = await auth.api.getToken({
        headers: await headers()

    })

    const res = await fetch(`http://localhost:8000/allpets/${id}`, {
        headers: {
            authorization: `Barear ${token?.token}`
        }
    });
    const expectedPets = await res.json();

    return (
        <section className="  py-28">
            <div className="max-w-11/12 mx-auto px-5">


                <Link href={"/allpets"}>
                    <Button
                        variant="light"
                        className="mb-8 text-gray-400"
                    >
                        ← Back to All Pets
                    </Button>
                </Link>

                <div className="grid lg:grid-cols-2 gap-5">


                    <Card className="bg-white/40 border border-white/40 shadow-none rounded-3xl overflow-hidden">


                        <div className="relative">
                            <Image
                                src={expectedPets?.imageUrl}
                                alt={expectedPets?.petName}
                                width={1000}
                                height={700}
                                className="w-full h-[420px] object-cover rounded-2xl"
                            />

                            <Chip
                                className="absolute top-5 right-5  border border-white/40"
                                radius="full"
                                variant="flat"
                            >
                                {expectedPets?.status}
                            </Chip>
                        </div>

                        <div className="p-7 space-y-7">

                            <div className="flex items-start justify-between gap-5">

                                <div>
                                    <h1 className="text-2xl font-bold">
                                        {expectedPets?.petName}
                                    </h1>

                                    <p className="text-gray-500 py-2">
                                        {expectedPets?.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 mt-4">

                                        <Chip
                                            variant="bordered"
                                            className=" text-gray-500"
                                        >
                                            {expectedPets?.species}
                                        </Chip>

                                        <Chip
                                            variant="bordered"
                                            className=" text-gray-500"
                                        >
                                            {expectedPets?.breed}
                                        </Chip>

                                        <Chip
                                            variant="bordered"
                                            className="text-gray-500"
                                        >
                                            {expectedPets?.gender}
                                        </Chip>

                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-gray-500 text-sm">
                                        Adoption Fee
                                    </p>

                                    <h2 className="text-3xl font-bold">
                                        ${expectedPets?.adoptionFee}
                                    </h2>
                                </div>
                            </div>



                            <div className="grid md:grid-cols-2 gap-2">


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <PawPrint className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Species
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.species}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <HeartPulse className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Breed
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.breed}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <Calendar className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Age
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.age}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <User className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Gender
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.gender}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <MapPin className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Location
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.location}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <Shield className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Health Status
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.healthStatus}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>


                                <Card className="text-center bg-white/40 border border-white/40 p-4">
                                    <div>
                                        <Syringe className="mx-auto mb-2" />
                                        <div>
                                            <p className="text-gray-600">
                                                Vaccinated
                                            </p>
                                            <h3 className="text-lg font-semibold">
                                                {expectedPets?.vaccinated}
                                            </h3>
                                        </div>
                                    </div>
                                </Card>

                            </div>
                        </div>
                    </Card>


                    <DetailsForm expectedPets={expectedPets} />


                </div>
            </div>
        </section>
    );
};

export default DetailsPage;