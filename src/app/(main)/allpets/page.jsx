import AllpetsCard from '@/Components/AllPetsCard/AllpetsCard';
import { Card } from '@heroui/react';
import React from 'react';

const AllpetsPage = async () => {

    const res = await fetch('http://localhost:8000/allpets')
    const pets = await res.json()
    console.log(pets, 'pets');




    return (
        <div className='my-20 container mx-auto'>
            <div className='grid grid-cols-4'>
                {
                    pets.map(pet => <AllpetsCard key={pet._id} pet={pet}></AllpetsCard>)
                }
            </div>
        </div>
    );
};

export default AllpetsPage;