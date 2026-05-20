"use client"
import React from 'react';
import { motion } from 'framer-motion'
import AllpetsCard from './AllpetsCard';
import { SearchField } from '@heroui/react';
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { useState } from "react";
import { ChevronDown } from '@gravity-ui/icons';

const AllpetsMotion = ({ pets }) => {
    return (
        <div className='my-29'>
            <h1 className='text-center text-3xl font-bold'>Find Your Companion</h1>
            <p className='text-center pt-2 pb-5 text-gray-500'>Browse lovable pets ready for adoption and find the perfect furry friend to brighten your life.</p>


            <div className='flex  justify-between bg-white/30 border border-white/40 rounded-2xl p-4 my-7'>
                <SearchField name="search">
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[280px]" placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>



                <Dropdown>
                    <Button className={'bg-white/40 border-white/40'} aria-label="Menu" variant="">
                        Filter pets by species <ChevronDown></ChevronDown>
                    </Button>
                    <Dropdown.Popover className="min-w-[256px]">
                        <Dropdown.Menu
                            selectionMode="single"

                        >
                            <Dropdown.Section>
                                <Header>Dog</Header>
                                <Dropdown.Item id="apple" textValue="Apple">
                                    <Dropdown.ItemIndicator />
                                    <Label>Cat</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="banana" textValue="Banana">
                                    <Dropdown.ItemIndicator />
                                    <Label>Bird</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="cherry" textValue="Cherry">
                                    <Dropdown.ItemIndicator />
                                    <Label>Rabbit</Label>
                                </Dropdown.Item>
                            </Dropdown.Section>
                            <Dropdown.Item id="orange" textValue="Orange">
                                <Dropdown.ItemIndicator />
                                <Label>other</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    pets.map((pet, index) => <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.03 }}
                        key={pet._id}>

                        <AllpetsCard pet={pet}></AllpetsCard>
                    </motion.div>
                    )
                }






            </div>
        </div >
    );
};

export default AllpetsMotion;