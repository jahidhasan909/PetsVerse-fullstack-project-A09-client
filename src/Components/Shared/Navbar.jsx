"use client"
import { useState } from "react";
import { Link, Button, Spinner, Avatar, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Sun, ArrowRightFromSquare, Gear, Persons, ChevronDown } from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { DotSpinner } from 'ldrs/react'
import 'ldrs/react/DotSpinner.css'






export function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const { data, isPending } = authClient.useSession()

    const router = useRouter();




    const user = data?.user



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
        <div className=" fixed absolute top-0 z-50 w-full py-5">
            <nav className=" container mx-auto ">
                <header className="flex h-16 items-center justify-between ">
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        <Link href="/" className={'no-underline'}>
                            <div className="flex items-center gap-2">
                                <Image src={'https://i.ibb.co.com/Ldd9yZMf/pets-1-removebg-preview.png'} height={50} width={40} className="w-full h-[36px]" alt="logo"></Image>
                                <h1 className=" uppercase pt-2 text-white text-2xl font-bold">PetsVerse</h1>
                            </div>
                        </Link>
                    </div>




                    <div className="bg-white/30 gap-7 hidden lg:flex px-17 uppercase rounded-full py-1 border border-white/30">


                        <div className="">
                            <Link className={pathname === '/' ? 'py-2  text-[#eb7a09] no-underline font-bold text-[12px]' : 'py-2 no-underline text-neutral-300 font-semibold text-[12px]'} href={'/'}>Home</Link>

                        </div>
                        <div className="">
                            <Link className={pathname === '/allpets' ? 'py-2 text-[#eb7a09] no-underline font-bold text-[12px]' : 'py-2 no-underline text-neutral-300  font-semibold text-[12px]'} href={'/allpets'}> All Pets</Link>

                        </div>

                    </div>






                    <ul className=" items-center gap-3 flex">
                        <li className="py-3 px-3 rounded-full bg-white/30 border border-white/30 text-white">
                            <Sun />
                        </li>


                        {
                            user ? <ul className="flex items-center gap-2">
                                <Dropdown>
                                    <Dropdown.Trigger className="rounded-full flex items-center gap-1 hover:bg-white/30 hover:border hover:border-white/30 p-1">
                                        <Avatar size="lg">
                                            <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                            <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                                        </Avatar>
                                        <span className="text-white font-semibold">{user?.name.slice(0, 5)}</span>
                                        <span className="text-white"><ChevronDown></ChevronDown></span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Popover>
                                        <div className="px-3 pt-3 pb-1">
                                            <div className="flex items-center gap-2">
                                                <Avatar>
                                                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                                    <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                                                </Avatar>
                                                <div className="flex flex-col gap-0">
                                                    <p className="text-sm leading-5 font-medium">{user?.name}</p>
                                                    <p className="text-xs leading-none text-muted">{user?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Dropdown.Menu>

                                            <Dropdown.Item
                                                textValue="Dashboard"
                                                onClick={() => router.push("/deshboard")}
                                            >
                                                <Label>Dashboard</Label>
                                            </Dropdown.Item>



                                            <Dropdown.Item onClick={() => authClient.signOut()} id="logout" textValue="Logout" variant="danger">
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <Label>Log Out</Label>
                                                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            </ul> : <li><Link className={'no-underline py-3 px-5 rounded-full bg-white/30 border border-white/30 text-white'} href="/login">Log In</Link></li>
                        }




                    </ul>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator  lg:hidden">
                        <ul className="flex flex-col gap-2 p-4 text-white bg-[#272738]">
                            <li><Link className={'text-white'} href="/">Home</Link></li>
                            <li><Link className={'text-white'} href="/profile">Profile</Link></li>
                            <li><Link className={'text-white'} href="/destination">Destinations</Link></li>
                            <li><Link className={'text-white'} href="/mybooking">My Bookings</Link></li>
                            <li><Link className={'text-white'} href="/add-destination">Add Destinations</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}