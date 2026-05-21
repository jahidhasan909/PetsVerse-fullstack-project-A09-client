import AllpetsCard from '@/Components/AllPetsCard/AllpetsCard';
import AllpetsMotion from '@/Components/AllPetsCard/AllpetsMotion';
import { Card } from '@heroui/react';
import React from 'react';

const AllpetsPage = async () => {

    const res = await fetch('https://pets-verse-fullstack-project-a09-se.vercel.app/allpets')
    const pets = await res.json()
    




    return (
        <div className='my-20 container mx-auto'>
            <AllpetsMotion pets={pets}></AllpetsMotion>
        </div>
    );
};

export default AllpetsPage;