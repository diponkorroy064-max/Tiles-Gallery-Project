import React from 'react';
import Marquee from 'react-fast-marquee';


const BreakingNews = () => {
    return (
        <div className='container mx-auto bg-pink-500 text-white py-7 px-2'>
            <Marquee pauseOnHover={true} speed={100}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae ad tempore aperiam vero repellendus odit autem maiores, veritatis esse quidem eveniet perspiciatis nostrum iste praesentium velit distinctio cum quis.
            </Marquee>
        </div>
    );
};

export default BreakingNews;
