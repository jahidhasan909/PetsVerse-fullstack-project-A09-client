"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
    ssr: false,
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, LocationArrow } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import { IconPaw } from '@tabler/icons-react';
import { IconPoint } from '@tabler/icons-react';









function AppendDots() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [featuredData, setFeaturedData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/allpets`)
            .then(res => res.json())
            .then(data => setFeaturedData(data.slice(0, 6)))
    }, [])




    const settings = {
        dots: true,
        infinite: false,
        speed: 500,

        slidesToShow: 2.5,

        centerMode: false,
        arrows: true,

        appendDots: (dots) => (
            <div style={{ marginTop: '20px' }}>
                <ul className="flex items-center justify-center gap-3 m-0 p-0">
                    {dots}
                </ul>
            </div>
        ),

        beforeChange: (prev, next) => setCurrentSlide(next),

        customPaging: (i) => (
            <div
                className={`w-8 p-1.5 border rounded-sm transition-all duration-300 ${i === currentSlide
                    ? "bg-white/30 border-white/40 border text-black" // Active styles
                    : "border-neutral-500 text-neutral-500"    // Inactive styles
                    }`}
            >
                {i + 1}
            </div>
        ),
    };

    return (
        <div className="hidden md:block my-27 max-w-11/13 mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-3xl ">Featured Pets</h1>
                    <p className="text-neutral-400  text-[1.10rem] mt-2">Discover some of our most lovable pets waiting for a forever home. Find your perfect companion today.</p>
                </div>
                <Link href={'/allpets'}>
                    <Button variant="outline" className={' mt-3 bg-white/30 border-white/30 '}>ALL Pets <ArrowRight></ArrowRight></Button></Link>
            </div >
            <Slider {...settings} className="">
                {
                    featuredData.map((petsinfo, index) => <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.03 }}
                        key={petsinfo._id} className=" md:max-w-xl pr-4 mb-7 mt-4 relative overflow-hidden">
                        <Card variant="" className={'rounded-md  bg-white/30 border-white/30 border'}>
                            <Image src={petsinfo?.imageUrl} className='w-full object-cover relative overflow-hidden rounded-md h-[230px]' height={230} width={250} alt={petsinfo?.petName}></Image>
                            <p className=" absolute p-2 text-md">{petsinfo?.status === 'Available' ? <Chip color="success">{petsinfo?.status}</Chip> : petsinfo?.status === 'panding' ? <Chip color="warning">{petsinfo?.status}</Chip> : <Chip color="success">{petsinfo?.status}</Chip>}</p>
                            <Card.Header className='p-2'>
                                <div className=' space-y-2'>
                                    <Card.Title className='text-[1.25rem]'>{petsinfo?.petName}</Card.Title>
                                    <Card.Description className='text-gray-500 flex'>{petsinfo?.breed} <IconPoint stroke={2} /> {petsinfo?.age} <IconPoint stroke={2} /> {petsinfo?.gender} </Card.Description>
                                    <span className="flex items-center gap-1 text-sm"><LocationArrow></LocationArrow> {petsinfo?.location}</span>
                                    <h3 className='text-[1.10rem]'>${petsinfo?.adoptionFee}/Adoption Fee</h3>

                                    <div className="flex gap-2">

                                        <Link href={`/allpets/${petsinfo?._id}`} className='flex items-center gap-1 underline'>
                                            View Details
                                            <ArrowUpRight />
                                        </Link>
                                        <Link href={`/allpets/${petsinfo?._id}`} className='no-underline flex items-center gap-1  text-[#b38b6d]'>
                                            <Button variant="outline" className={'bg-white/30 border-white/40 font-semibold'}>
                                                Adopt Now
                                                <IconPaw stroke={2} />
                                            </Button>

                                        </Link>
                                    </div>
                                </div>
                            </Card.Header>
                        </Card>
                    </motion.div>)
                }
            </Slider>
        </div>
    );
}

export default AppendDots;