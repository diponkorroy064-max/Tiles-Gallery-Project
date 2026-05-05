import { allTilesData } from '@/lib/fetch_data';
import React from 'react';

const TileDetailsPage = async({ params }) => {
    const { id } = await params;
    // console.log("Clicked id by params", id);

    const data = await allTilesData();
    // console.log(data);

    const findData = data.find(item => item.id === id);
    console.log(findData);
    
    const {title, description, dimensions,price,image,currency, material,category} = findData;

    return (
        <div className='container mx-auto px-10 py-15'>
            <div className="card lg:card-side shadow-sm border grid grid-cols-1 md:grid-cols-2">
                <div className='card-body col-span-1 bg-amber-200'>
                    Image
                </div>
                
                <div className="card-body col-span-1 bg-green-200">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{dimensions}</p>
                    <p>{price}</p>
                    <p>{material}</p>
                    <p>{category}</p>
                    <p>{description}</p>
                </div>
            </div>
       </div>
    );
};

export default TileDetailsPage;
