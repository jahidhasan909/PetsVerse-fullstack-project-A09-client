'use client'
import { Card } from '@heroui/react';
import React from 'react';
import Image from 'next/image';
import { IconHeart } from '@tabler/icons-react';
import { IconFileLike } from '@tabler/icons-react';
import { IconHomeShield } from '@tabler/icons-react';
import { IconMoodSmileBeam } from '@tabler/icons-react';
import { motion } from 'framer-motion'


const WhyAdoptPets = () => {
    return (
        <div className='my-27 max-w-11/13  mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Why Adopt Pets</h1>
            <p className='text-center text-[1.05rem] text-gray-500 py-2'>Adopting a pet saves a life and gives you a loyal  companion filled with love, <br /> happiness, and care.</p>

            <div className='grid grid-cols-2 mt-4 mb-5 gap-5'>


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='grid grid-cols-2 gap-2'
                >



                    <Card className='text-center flex justify-center bg-[#FCF8F3] dark:bg-black border border-white/40'>
                        <span className='mx-auto'><IconHeart stroke={2} /></span>
                        <h1 className='text-xl font-semibold'>Save a Life</h1>
                        <p className='text-gray-500 text-[0.95rem] p-1'>Give a homeless pet a second chance at a happy and safe life.</p>
                    </Card>
                    <Card className='text-center flex justify-center bg-[#FCF8F3] dark:bg-black border border-white/40'>
                        <span className='mx-auto'><IconFileLike stroke={2} /></span>
                        <h1 className='text-xl font-semibold'>Loyal Companion</h1>
                        <p className='text-gray-500 text-[0.95rem] p-1'>Adopted pets stay loyal and build a strong emotional bond with you.</p>
                    </Card>
                    <Card className='text-center flex justify-center bg-[#FCF8F3] dark:bg-black border border-white/40'>
                        <span className='mx-auto'><IconHomeShield stroke={2} /></span>
                        <h1 className='text-xl font-semibold'>Safe & Trusted Process</h1>
                        <p className='text-gray-500 text-[0.95rem] p-1'>Secure adoption process with verified shelters and owners.</p>
                    </Card>
                    <Card className='text-center flex justify-center bg-[#FCF8F3] dark:bg-black border border-white/40 '>
                        <span className='mx-auto'><IconMoodSmileBeam stroke={2} /></span>
                        <h1 className='text-xl font-semibold'>Emotional Happiness</h1>
                        <p className='text-gray-500 text-[0.95rem] p-1'>Pets bring love, joy, and reduce stress in your everyday life.</p>
                    </Card>
                </motion.div>






                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >


                    <Image src={'https://images.unsplash.com/photo-1586836605732-1028b1db229f'} height={500} width={800} className='w-full object-cover h-[350px] mb-2 rounded-2xl' alt='whyimgs'></Image>
                    <div className='grid grid-cols-2 gap-2'>
                        <Image src={'https://images.unsplash.com/photo-1631988140641-12e88e0c8e8a'} height={500} width={800} className='w-full object-cover h-[350px] rounded-2xl' alt='whyimgs'></Image>
                        <Image src={'https://plus.unsplash.com/premium_photo-1661729608452-9c34c2561e2a'} height={500} width={800} className='w-full object-cover h-[350px]  rounded-2xl' alt='whyimgs'></Image>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default WhyAdoptPets;