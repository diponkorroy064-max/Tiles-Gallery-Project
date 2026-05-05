import TilesCard from '@/app/components/shared/TilesCard';
import { allTilesData } from '@/lib/fetch_data';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';


const AllTilesPage = async() => {
    const allTiles = await allTilesData();
    // console.log(allTiles);


    return (
        <div className='container mx-auto px-10 py-10 space-y-10'>
            <div className=''>
                <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <p className='text-xl'><IoIosSearch /></p>
                            <input type="text" placeholder="Search Tiles by title" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn btn-neutral join-item">Search</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allTiles.map(tiles=> <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;
