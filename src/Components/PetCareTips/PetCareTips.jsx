'use client'
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const PetCareTips = () => {
    return (
        <div className='my-27 max-w-6xl mx-auto bg-white/50 border-white/50 rounded-2xl p-8'>
            <h1 className='text-center text-3xl font-bold'>Pet Care Tips</h1>
            <p className='text-center pt-2 pb-4 text-gray-500 text-[0.95rem]'>Simple tips to keep your pets happy, healthy, and well cared for.</p>

            <Image className='mx-auto h-[400px]  rounded-2xl' src={'https://i.ibb.co.com/TMB1WXQz/Chat-GPT-Image-May-19-2026-at-01-43-04-AM-removebg-preview.png'} width={800} height={670} alt='petsimg'></Image>








            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 gap-4 mt-5'
            >
                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/30 '>
                    <h1 className='text-lg font-semibold'>Veterinary Care</h1>
                    <p className='text-gray-500'>Schedule annual checkups, maintain up-to-date vaccinations, and use year-round flea, tick, and worm prevention.</p>
                </Card>

                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/30'>
                    <h1 className='text-lg font-semibold'>Nutrition</h1>
                    <p className='text-gray-500'>Provide high-quality, age-appropriate food and constant access to clean water. Limit table scraps to prevent obesity and nutrient imbalances.</p>
                </Card>

                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/30'>
                    <h1 className='text-lg font-semibold'>Exercise & Mental Health</h1>
                    <p className='text-gray-500'>Ensure daily exercise (walking, playing fetch, or toy interaction) to keep pets fit and mentally engaged, reducing behavioral issues.</p>
                </Card>


                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/30'>
                    <h1 className='text-lg font-semibold'>Grooming</h1>
                    <p className='text-gray-500'>Regularly brush coats, trim nails, clean ears, and brush teeth (ideally daily) with pet-safe toothpaste.</p>
                </Card>


                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/30'>
                    <h1 className='text-lg font-semibold'>Safety & Identification</h1>
                    <p className='text-gray-500'>Keep pets safe with collars, ID tags, and microchips. Ensure they have a comfortable, warm place to sleep.</p>
                </Card>



                <Card className='bg-[#FCF8F3] dark:bg-black border border-white/30'>
                    <h1 className='text-lg font-semibold'>Spay/Neuter</h1>
                    <p className='text-gray-500'>Sterilizing pets prevents health issues like cancers and reduces the number of homeless animals.</p>
                </Card>
            </motion.div>


        </div>
    );
};

export default PetCareTips;