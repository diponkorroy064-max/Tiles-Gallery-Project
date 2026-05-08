'use client'
import React, { useState } from 'react';
import TilesCard from '../shared/TilesCard';
import TileSearch from './TileSearch';


const ALLTileClient = ({ allTiles }) => {

    const [query, setQuery] = useState('');
    const filteredTiles = allTiles.filter(tile => tile.title.toLowerCase().includes(query.toLowerCase()));
    console.log("filtered tiles", filteredTiles);


    return (
        <div className='space-y-15'>
            <div className=''>
                <TileSearch query={query} setQuery={setQuery}></TileSearch>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    filteredTiles.length === 0 ? (
                        <div className='text-red-400 text-center py-10 col-span-full'>
                            No Tiles Found
                        </div>) :
                        (filteredTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>))
                }
            </div>
        </div>
    );
};

export default ALLTileClient;

