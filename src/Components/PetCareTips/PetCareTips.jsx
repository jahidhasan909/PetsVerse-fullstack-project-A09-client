import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PetCareTips = () => {
    return (
        <div className='my-10 max-w-5xl mx-auto'>
            <h1 className='text-center text-xl font-semibold'>Pet Care Tips</h1>
            <p className='text-center pt-2 pb-4'>Simple tips to keep your pets happy, healthy, and well cared for.</p>

            <Image className='w-full  h-[450px]  rounded-2xl' src={'https://i.ibb.co.com/7Jnc2drX/Chat-GPT-Image-May-19-2026-at-01-43-04-AM.png'} width={800} height={670} alt='petsimg'></Image>


            <section className='grid grid-cols-2 gap-4 mt-5'>
               <Card>
                <h1>Veterinary Care</h1>
                <p>Schedule annual checkups, maintain up-to-date vaccinations, and use year-round flea, tick, and worm prevention.</p>
               </Card>






               <Card>
                <h1>Nutrition</h1>
                <p>Provide high-quality, age-appropriate food and constant access to clean water. Limit table scraps to prevent obesity and nutrient imbalances.</p>
               </Card>

               <Card>
                <h1>Exercise & Mental Health</h1>
                <p>Ensure daily exercise (walking, playing fetch, or toy interaction) to keep pets fit and mentally engaged, reducing behavioral issues.</p>
               </Card>


               <Card>
                <h1>Grooming</h1>
                <p>Regularly brush coats, trim nails, clean ears, and brush teeth (ideally daily) with pet-safe toothpaste.</p>
               </Card>


               <Card>
                <h1>Safety & Identification</h1>
                <p>Keep pets safe with collars, ID tags, and microchips. Ensure they have a comfortable, warm place to sleep.</p>
               </Card>



               <Card>
                <h1>Spay/Neuter</h1>
                <p>Sterilizing pets prevents health issues like cancers and reduces the number of homeless animals.</p>
               </Card>
            </section>
        </div>
    );
};

export default PetCareTips;