import Image from 'next/image';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdPets } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
    return (
        <div className='bg-[#282828] '>
            <footer >
                <div className="grid grid-cols-5  container mx-auto gap-6 p-14">

                    <aside>

                        <div className="flex items-center gap-2">
                            <Image src={'https://i.ibb.co.com/Ldd9yZMf/pets-1-removebg-preview.png'} height={40} width={40} className="h-[36px]" alt="logo"></Image>
                            <h1 className=" uppercase pt-2 text-white text-2xl font-bold">PetsVerse</h1>
                        </div>
                        <br />
                        <p className='text-white'>Caring for every paw, every day. Adopt, love, and give pets a forever home with us.</p>

                        <div className='flex gap-2 mt-4'>

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
                        </div>

                    </aside>


                    <Image src={'https://i.ibb.co.com/4g1b19w2/Gemini-Generated-Image-ae5gg9ae5gg9ae5g-Photoroom-removebg-preview.png'} width={70} height={60} className='h-[40px] -rotate-45  object-contain' alt=''></Image>



                    <nav className='flex flex-col text-white space-y-2'>
                        <h6 className=" uppercase ">Services</h6>
                        <a className="mt-3">Branding</a>
                        <a className="">Design</a>
                        <a className="">Marketing</a>
                        <a className="">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col text-white space-y-2'>
                        <h6 className=" uppercase ">Company</h6>
                        <a className="mt-3">About us</a>
                        <a className="">Contact</a>
                        <a className="">Jobs</a>
                        <a className="">Press kit</a>
                    </nav>
                    <nav className='flex flex-col text-white space-y-2'>
                        <h6 className=" uppercase">Contact Us</h6>
                        <a className="flex items-center gap-2 mt-3"><span><FaLocationDot /></span>200 Paw Street, New york City, AC 12345</a>
                        <a className="flex items-center gap-2"><span><IoMdCall /></span>+1 (444) 123-4560</a>
                        <a className="flex items-center gap-2"><span><MdEmail /></span>info@petsverse.com</a>  
                    </nav>
                </div>
                <br />

                <div className='border-t border-dashed border-white pb-2 container mx-auto'></div>
           
                    <p className='text-white text-right py-2 container'>© 2026 PetsVerse. All rights reserved.</p>
                
            </footer>
        </div>
    );
};

export default Footer;