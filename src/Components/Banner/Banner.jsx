import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className=' relative overflow-hidden'>
            <Image src={'https://i.ibb.co.com/tyFhgSP/Screenshot-2026-05-18-at-2-48-52-PM-Photoroom-Picsart-Ai-Image-Enhancer.png'} width={1000} height={1300} className='w-full object-cover relative overflow-hidden  h-[920px] ' alt='banner' ></Image>
           <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/10"></div>
            <div
                className='absolute inset-0 backdrop-blur-xs'
                style={{
                    WebkitMaskImage: `
                        linear-gradient(to bottom,
                            black 0%,
                            black 6%,
                            transparent 20%
                        ),
                        radial-gradient(
                            circle at center,
                            transparent 20%,
                            black 100%
                        )
                    `,
                    WebkitMaskComposite: 'source-over',
                    maskImage: `
                        linear-gradient(to bottom,
                            black 0%,
                            black 6%,
                            transparent 45%
                        ),
                        radial-gradient(
                            circle at center,
                            transparent 45%,
                            black 100%
                        )
                    `,
                }}
            />


            <div>
                
            </div>

        </div>
    );
};

export default Banner;