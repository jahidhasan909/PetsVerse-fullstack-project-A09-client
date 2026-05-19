"use client"
import React, { useState } from 'react';



import {
    LayoutDashboard,
    PawPrint,
    Heart,
    LogOut,
    Menu,
    X,
    GitPullRequestCreateArrow,
} from "lucide-react";
import { redirect, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightFromSquare } from '@gravity-ui/icons';
import { Avatar, Dropdown, Label } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const navItems = [
    {
        title: "My Requests",
        href: "/deshboard",
        icon: GitPullRequestCreateArrow,
    },
    {
        title: "Add Pet",
        href: "/deshboard/add-pet",
        icon: PawPrint,
    },
    {
        title: "My Listings",
        href: "/deshboard/my-listings",
        icon: Heart,
    },

];














const Sidebar = () => {
    const pathname = usePathname();



    const [open, setOpen] = useState(false);


    const handlSingout = () => {
        authClient.signOut()
        redirect('/')
    }



    return (

        <>

            <div className="lg:hidden fixed top-0 left-0 z-50 w-full h-16 bg-black border-b border-white/10 flex items-center justify-between px-4">
                <h1 className="text-white text-2xl font-bold">
                    PetsVerse
                </h1>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-white"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                />
            )}


            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-black border-r border-white/10 flex flex-col justify-between transition-all duration-300${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >

                <div>

                    <div className="h-20 flex gap-12 justify-center items-center px-6 border-b border-white/10">
                        <Link href="/" className={'no-underline'}>
                            <div className="flex items-center gap-2">
                                <Image src={'https://i.ibb.co.com/Ldd9yZMf/pets-1-removebg-preview.png'} height={50} width={40} className="w-full h-[36px]" alt="logo"></Image>
                                <h1 className=" uppercase pt-2 text-white text-2xl font-bold">PetsVerse</h1>
                            </div>
                        </Link>


                        <span className='text-white text-[8px] bg-white/30 border border-white/30 rounded-full mt-2 p-1'>Dashboard</span>


                    </div>

                    <div className="p-4 space-y-2 text-white">
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center gap-3px-4 py-3 rounded-2xl transition-all duration-200 no-underline ${pathname === item.href
                                        ? "bg-white text-black"
                                        : "text-neutral-400 hover:bg-white/10 hover:text-white"
                                        }
`}
                                >
                                    <Icon size={20} />

                                    <span className="text-white pl-2">
                                        {item.title}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>


                <div className="p-4 border-t border-white/10">
                    <button
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-neutral-400 hover:bg-white hover:text-black transition-all duration-200"
                    >
                        <LogOut size={20} />

                        <span onClick={handlSingout} className="font-medium">
                            Logout
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;