"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import AllpetsCard from './AllpetsCard';
import { SearchField } from '@heroui/react';
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { useState } from "react";
import { ChevronDown } from '@gravity-ui/icons';

const AllpetsMotion = ({ pets }) => {


    const [allPets,  setAllPets] = useState(pets);

    const [search,  setSearch] = useState('');

    const [species,  setSpecies] = useState('');



    useEffect(() => {
        fetch(
            `http://localhost:8000/allpets?search=${search}&species=${species}`
        )
            .then(res => res.json())
            .then(data => setAllPets(data));
    }, [search, species]);


    return (
        <div className='my-29'>
            <h1 className='text-center text-3xl font-bold'>Find Your Companion</h1>
            <p className='text-center pt-2 pb-5 text-gray-500'>Browse lovable pets ready for adoption and find the perfect furry friend to brighten your life.</p>


            <div className='flex  justify-between bg-[#FCF8F3] dark:bg-black border border-white/40 rounded-2xl p-4 my-7'>
                <SearchField name="search">
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[280px]" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>



                <Dropdown>
                    <Button className={'text-[#D97706] border-[#D97706] border font-semibold'} aria-label="Menu" variant="">
                        Filter pets by species <ChevronDown></ChevronDown>
                    </Button>
                    <Dropdown.Popover className="min-w-[256px]">
                        <Dropdown.Menu
                         onAction={(key) => setSpecies(key)}
                            selectionMode="single"

                        >
                            <Dropdown.Section>
                                
                                <Dropdown.Item id="Dog" textValue="Dog">
                                    <Dropdown.ItemIndicator />
                                    <Label>Dog</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="Cat" textValue="Cat">
                                    <Dropdown.ItemIndicator />
                                    <Label>Cat</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="Bird" textValue="Bird">
                                    <Dropdown.ItemIndicator />
                                    <Label>Bird</Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="Rabbit" textValue="Rabbit">
                                    <Dropdown.ItemIndicator />
                                    <Label>Rabbit</Label>
                                </Dropdown.Item>
                            </Dropdown.Section>
                            <Dropdown.Item id="other" textValue="other">
                                <Dropdown.ItemIndicator />
                                <Label>other</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    allPets.map((pet, index) => <motion.div
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