import TilesCard from '@/app/components/shared/TilesCard';
import TileSearch from '@/app/components/allTileComponent/TileSearch';
import { allTilesData } from '@/lib/fetch_data';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import ALLTileClient from '@/app/components/allTileComponent/ALLTileClient';


export const metadata = {
    title: "Tiles Gallery Project - all tiles",
}

const AllTilesPage = async() => {
    const allTiles = await allTilesData();
    // console.log(allTiles);


    return (
        <div className='container mx-auto px-10 py-10'>
            <div>
                <ALLTileClient allTiles={allTiles}></ALLTileClient>
            </div>
        </div>
    );
};

export default AllTilesPage;
