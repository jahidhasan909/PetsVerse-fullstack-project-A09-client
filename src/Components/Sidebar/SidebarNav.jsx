"use client"
import { authClient } from '@/lib/auth-client';
import { ArrowRightFromSquare, Sun } from '@gravity-ui/icons';
import { Avatar, Dropdown, Label } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const SidebarNav = () => {


    const { data, isPending } = authClient.useSession()




    const user = data?.user
    console.log(user);


    if (isPending) {
        return <h1>loading..</h1>
    }





    return (
        <div className='flex items-center gap-3'>
            <span className="py-3 px-3 rounded-full bg-white/30 border border-white/30 text-white pr-3">
                <Sun />
            </span>
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