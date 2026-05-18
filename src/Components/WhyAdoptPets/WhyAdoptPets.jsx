import { Card } from '@heroui/react';
import React from 'react';
import { SiIlovepdf } from "react-icons/si";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
import Image from 'next/image';

const WhyAdoptPets = () => {
    return (
        <div className='my-10 max-w-7xl  mx-auto'>
            <h1 className='text-center text-2xl font-semibold'>Why Adopt Pets</h1>
            <p className='text-center text-xs py-2'>Adopting a pet saves a life and gives you a loyal  companion filled with love, <br /> happiness, and care.</p>

            <div className='grid grid-cols-2 mt-4 mb-5 gap-5'>
                <div className='grid grid-cols-2 gap-2'>
                    <Card className='text-center flex justify-center'>
                        <span className='mx-auto'><SiIlovepdf /></span>
                        <h1 className='text-xl font-semibold'>Save a Life</h1>
                        <p>Give a homeless pet a second chance at a happy and safe life.</p>
                    </Card>
                    <Card className='text-center flex justify-center'>
                        <span className='mx-auto'><FaHandshakeSimple /></span>
                        <h1  className='text-xl font-semibold'>Loyal Companion</h1>
                        <p>Adopted pets stay loyal and build a strong emotional bond with you.</p>
                    </Card>
                    <Card className='text-center flex justify-center'>
                        <span className='mx-auto'><LuBadgeCheck /></span>
                        <h1  className='text-xl font-semibold'>Safe & Trusted Process</h1>
                        <p>Secure adoption process with verified shelters and owners.</p>
                    </Card>
                    <Card className='text-center flex justify-center'>
                        <span className='mx-auto'><RiEmotionHappyLine /></span>
                        <h1  className='text-xl font-semibold'>Emotional Happiness</h1>
                        <p>Pets bring love, joy, and reduce stress in your everyday life.</p>
                    </Card>
                </div>


                <div className=''>
                    <Image src={'https://images.unsplash.com/photo-1586836605732-1028b1db229f'} height={500} width={800} className='w-full object-cover h-[350px] mb-2 rounded-2xl' alt='whyimgs'></Image>
                    <div className='grid grid-cols-2 gap-2'>
                        <Image src={'https://images.unsplash.com/photo-1631988140641-12e88e0c8e8a'} height={500} width={800} className='w-full object-cover h-[350px] rounded-2xl' alt='whyimgs'></Image>
                        <Image src={'https://plus.unsplash.com/premium_photo-1661729608452-9c34c2561e2a'} height={500} width={800} className='w-full object-cover h-[350px]  rounded-2xl' alt='whyimgs'></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAdoptPets;