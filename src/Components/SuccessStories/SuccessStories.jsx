import { Button, Card } from '@heroui/react';
import React from 'react';
import ImageSlider from './Siwper';
import MomentSlider from './FamliySiwper';

const SuccessStories = () => {
    return (
        <div>
            <h1>Success Stories</h1>
            <p>Thanks to our amazing community, many pets have found loving homes. These numbers and moments reflect the happiness of pets and families coming together.</p>


            <div className='grid grid-cols-2'>
                <Card>
                     <p>200+</p>
                    <h1>Pets Adopted</h1>
                </Card>
                <ImageSlider></ImageSlider>
            </div>
            <div className='grid grid-cols-2'>
                <MomentSlider></MomentSlider>
                <Card>
                    <h1>Happy Families</h1>
                    <p>Beautiful moments of pets finding loving homes.</p>
                </Card>
            </div>
            <div>
                <Card>
                    <h1>Find Your Perfect Pet</h1>
                    <p>Discover pets that match your lifestyle and bring joy to your home.</p>
                    <Button variant='otuline'>Find Your Pet</Button>
                </Card>
            </div>
        </div>
    );
};

export default SuccessStories;