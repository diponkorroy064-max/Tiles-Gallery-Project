import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const TilesCard = ({ tiles }) => {
    // console.log(tiles);

    return (
        <div className="card bg-base-100 shadow-sm border border-gray-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

            <div className="pt-2.5 px-2.5">
                <Image className='border border-gray-400 rounded-md w-full h-50' src={tiles.image} height={500} width={500} alt={tiles.title} />
            </div>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{tiles.title}</h2>
                {/* <h2 className="card-title">{tiles.price}</h2> */}

                <div className="w-full">
                    <Link className='w-full' href={`/tileDetails/${tiles.id}`}><button className='btn w-full btn-primary'>Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;

