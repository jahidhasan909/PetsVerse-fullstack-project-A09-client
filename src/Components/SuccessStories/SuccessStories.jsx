import { Button, Card } from '@heroui/react';
import React from 'react';
import ImageSlider from './Siwper';
import MomentSlider from './FamliySiwper';

const SuccessStories = () => {
    return (
        <div className='max-w-5xl mx-auto my-10 text-center'>
            <h1 className='text-2xl font-semibold'>Success Stories</h1>
            <p className='pt-2 pb-4'>Thanks to our amazing community, many pets have found loving homes. These numbers and moments reflect the happiness of pets <br /> and families coming together.</p>


            <div className='grid grid-cols-2 gap-3 mb-3'>
                <Card className='flex justify-center'>
                     <p className='text-xl font-semibold'>200+</p>
                    <h1>Pets Adopted</h1>
                    <p>Loving homes found through our community.</p>
                </Card>
                <ImageSlider></ImageSlider>
            </div>
            <div className='grid grid-cols-2 gap-3 mb-3'>
                <MomentSlider></MomentSlider>
                <Card className='flex justify-center'>
                    <h1 className='text-xl font-semibold'>Happy Families</h1>
                    <p>Every adoption creates a beautiful bond between pets and their new families. These moments remind us why adoption matters.</p>
                </Card>
            </div>
            <div>
                <Card className='flex justify-center'>
                    <h1 className='text-xl font-semibold'>Find Your Perfect Pet</h1>
                    <p>Discover pets that match your lifestyle and bring joy to your home.</p>
                    <Button className={'mx-auto'} variant='otuline'>Find Your Pet</Button>
                </Card>
            </div>
        </div>
    );
};

export default SuccessStories;