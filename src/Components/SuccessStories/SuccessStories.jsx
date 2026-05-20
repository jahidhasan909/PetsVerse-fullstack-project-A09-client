'use client'
import { Button, Card } from '@heroui/react';
import ImageSlider from './Siwper';
import MomentSlider from './FamliySiwper';
import Link from 'next/link';
import { motion } from 'framer-motion'

const SuccessStories = () => {






    return (
        <div className='max-w-5xl mx-auto my-27 text-center'>
            <h1 className='text-3xl font-bold'>Success Stories</h1>
            <p className='pt-2 pb-4 text-gray-500 text-[0.95rem]'>Thanks to our amazing community, many pets have found loving homes. These numbers and moments <br /> reflect the happiness of pets  and families coming together.</p>



            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 gap-3 mb-3'
            >


                <Card className='flex justify-center bg-white/30 border border-white/40'>
                    <p className='text-xl font-semibold'>200+</p>
                    <h1 className='text-xl font-semibold'>Pets Adopted</h1>
                    <p className='text-gray-500'>Loving homes found through our community.</p>
                </Card>
                <ImageSlider></ImageSlider>
            </motion.div>




            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 gap-3 mb-3'
            >
                <MomentSlider></MomentSlider>
                <Card className='flex justify-center bg-white/30 border border-white/40'>
                    <h1 className='text-xl font-semibold'>Happy Families</h1>
                    <p className='text-gray-500 p-2'>Every adoption creates a beautiful bond between pets and their new families. These moments remind us why adoption matters.</p>
                </Card>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                
            >

                <Card className='flex justify-center bg-white/30 border border-white/40'>
                    <h1 className='text-xl font-semibold'>Find Your Perfect Pet</h1>
                    <p className='text-gray-500'>Discover pets that match your lifestyle and bring joy to your home.</p>
                    <Link className='' href={'/allpets'}><Button className={'mx-auto bg-white border-white/20'} variant='otuline'>Find Your Pet</Button></Link>
                </Card>
            </motion.div>



        </div>
    );
};

export default SuccessStories;