import { allTilesData } from '@/lib/fetch_data';
import React from 'react';
import TilesCard from '../shared/TilesCard';


const Featured = async() => {
    const allTiles = await allTilesData();
    const topTiles = allTiles.slice(0, 4);
    // console.log(topTiles);
    
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-10'>
            {
                topTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
            }
        </div>
    );
};

export default Featured;

