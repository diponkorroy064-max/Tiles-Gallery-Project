import React from 'react';
import Marquee from 'react-fast-marquee';


const BreakingNews = () => {
    return (
        <div className='container mx-auto bg-pink-500 text-white py-7 px-2'>
            <Marquee pauseOnHover={true} speed={100}>
                New Arrivals: Marble Carrara White, Emerald Glass Mosaic | Weekly Feature: Modern Geometric Patterns | Join the Community...
            </Marquee>
        </div>
    );
};

export default BreakingNews;
