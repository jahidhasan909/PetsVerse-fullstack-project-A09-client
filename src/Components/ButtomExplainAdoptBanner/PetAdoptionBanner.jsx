import { ArrowUpRight } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetAdoptionBanner = () => {
    return (
        <div className='my-10 max-w-11/13 bg-[#f28d2813] mx-auto items-center gap-4 grid grid-cols-1 md:flex justify-between p-12  rounded-2xl'>

            <div className='space-y-2'>
                <h1 className='text-2xl font-semibold'>Your Perfect Pet Is Waiting</h1>
                <p className='md:text-[10px] lg:text-[1rem] '>Discover loving companions ready to become part of your family. Browse adorable pets, connect with trusted owners, and find your forever friend today.</p>
                <Link href={'allpets'}><Button className={'bg-[#D97706] text-white font-semibold  border-white/20'} variant='outline'>Browse All Pets <ArrowUpRight></ArrowUpRight></Button></Link>
            </div>
            <div className='rounded-full'>
                <Image src={'https://i.ibb.co.com/7dYVYgFR/Chat-GPT-Image-May-19-2026-at-03-10-29-AM-removebg-preview.png'} width={100} height={220} className=' h-[200px]  w-[200px]' alt='bannerimg'></Image>
            </div>
            <Image src={'https://i.ibb.co.com/Fbg9MGPM/pets-1-removebg-preview.png'} className='hidden lg:block rotate-45 mt-28' width={40} height={40} alt=''></Image>
        </div>
    );
};

export default PetAdoptionBanner;