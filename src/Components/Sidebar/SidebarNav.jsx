"use client"
import { authClient } from '@/lib/auth-client';
import { ArrowRightFromSquare, Sun } from '@gravity-ui/icons';
import { Avatar, Dropdown, Label } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { DotSpinner } from 'ldrs/react'
import 'ldrs/react/DotSpinner.css'
import { ThemeSwitch } from '../Providers/ThemeSwitch';

const SidebarNav = () => {


    const { data, isPending } = authClient.useSession()




    const user = data?.user
    console.log(user);

    if (isPending) {
        return (
            <div className='flex justify-center items-center'>

                <DotSpinner

                    size="40"
                    speed="0.9"
                    color="black"
                />
            </div>
        )
    }




    return (
        <div className='flex items-center gap-3'>
            <ThemeSwitch></ThemeSwitch>
            <Avatar size="lg">
                <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
            </Avatar>
            <div className='text-white flex flex-col'>
                <span>{user?.name}</span>
                <span>{user?.email}</span>
            </div>
        </div>
    );
};

export default SidebarNav;