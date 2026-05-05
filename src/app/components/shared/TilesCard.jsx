import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({ tiles }) => {
    // console.log(tiles);
    return (
        <div className="card bg-base-100 shadow-sm border border-gray-300">
            <figure className="px-10 pt-10">
                {/* <Image src={tiles.image} height={100} width={100} alt={tiles.title} /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tiles.title}</h2>
                <h2 className="card-title">{tiles.price}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                <div className="btn w-full btn-primary">
                    <Link href={`/tileDetails/${tiles.id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;
