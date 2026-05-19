"use client"
import Image from 'next/image';
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { italianno } from '@/app/(main)/layout';
import { Button } from '@heroui/react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';




const Banner = () => {
    return (
        <div className=' relative overflow-hidden'>
            <Image src={'https://i.ibb.co.com/tyFhgSP/Screenshot-2026-05-18-at-2-48-52-PM-Photoroom-Picsart-Ai-Image-Enhancer.png'} width={1000} height={1300} className='w-full object-cover relative overflow-hidden  h-[920px] ' alt='banner' ></Image>
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/10"></div>
            <div
                className='absolute inset-0 backdrop-blur-xs'
                style={{
                    WebkitMaskImage: `
                        linear-gradient(to bottom,
                            black 0%,
                            black 6%,
                            transparent 20%
                        ),
                        radial-gradient(
                            circle at center,
                            transparent 20%,
                            black 100%
                        )
                    `,
                    WebkitMaskComposite: 'source-over',
                    maskImage: `
                        linear-gradient(to bottom,
                            black 0%,
                            black 6%,
                            transparent 45%
                        ),
                        radial-gradient(
                            circle at center,
                            transparent 45%,
                            black 100%
                        )
                    `,
                }}
            />
            <div className={` absolute  -translate-1/2 top-1/3 left-1/2 text-center`}>
                <p className={`${italianno.className} text-7xl text-[#eb7a09]`}>love and care</p>
                <h1 className='text-5xl font-bold text-white'>Find Your Forever Companion</h1>

                <div>
                    <TypeAnimation
                        sequence={[
                            'Connect with loving, rescued pets ready for a safe and happy home.',
                            1000,
                            'Discover a modern adoption experience designed to bring pets',
                            1000,
                            'and families together with care, trust, and simplicity.',
                            1000,
                        ]}
                        wrapper="span"
                        className='text-xl text-white mt-2'
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>



                <Button variant='outline' className={'bg-white/30 mt-5 border border-white/30 text-white'}>Adopt Now</Button>
            </div>

            <div className=' absolute top-1/3 mt-20 ml-10 text-white'>
                <h3 className='uppercase -rotate-90'>Reach  us</h3>
                <div className='  border-r border border-gray-400 rounded-full rotate-90 mt-20'>

                </div>
                <section className='pl-5 mt-12 flex flex-col gap-2'>
                    <a href=""><div className='bg-white/30 border border-white/30 w-9 h-9 p-2 rounded-full'><FaFacebookF size={'lg'} /></div></a>
                    <a href="">
                        <div className='bg-white/30 border border-white/30 w-9 h-9 p-2 rounded-full'><FaLinkedinIn size={'lg'} /></div>
                    </a>
                    <a href="">

                        <div className='p-2 bg-white/30 border border-white/30 w-9 h-9 rounded-full'><FaInstagram size={'lg'} /></div>
                    </a>
                    <a href="">

                        <div className='bg-white/30 p-2 border border-white/30 w-9 h-9  rounded-full'><BsTwitterX size={'lg'} /></div>
                    </a>

                </section>
                <div className=' absolute top-1/2 mt-60 pl-6'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-10 flex flex-col items-center lg:items-start gap-3"
                    >
                        <div className="flex flex-row items-center gap-3">

                            <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center p-1">
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>



            <div className='absolute shadow-2xl shadow-[#ff912421] mr-10 mb-10  bottom-0 right-0 overflow-hidden rounded-2xl'>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    className='w-[290px] h-[180px] object-cover'>
                    <source
                        src='https://res.cloudinary.com/dhtlka8jr/video/upload/307066_medium_grszjb.mp4'
                        type='video/mp4' />
                </video>
            </div>
        </div>
    );
};

export default Banner;