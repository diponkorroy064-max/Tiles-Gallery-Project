import { allTilesData } from '@/lib/fetch_data';
import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaRegCircleDot } from 'react-icons/fa6';


const TileDetailsPage = async({ params }) => {
    const { id } = await params;
    // console.log("Clicked id by params", id);

    const data = await allTilesData();
    // console.log(data);

    const findData = data.find(item => item.id === id);
    console.log(findData);
    
    const { title, description, dimensions, price, image, brand, material, category, ratings, tags } = findData;

    return (
        <div className='container mx-auto px-10 py-15'>

            <div className="card lg:card-side shadow-md border grid grid-cols-1 md:grid-cols-2">

                <div className='card-body col-span-1'>
                    <Image className='w-full border border-gray-400 rounded-md' src={image} height={500} width={500} alt={title} />
                </div>
                
                <div className="card-body col-span-1">
                    <div className='space-y-4'>
                        <h2 className="text-4xl font-extrabold  text-fuchsia-400 text-shadow-2xs text-shadow-gray-500">{title}</h2>

                        <p className='font-bold flex justify-start items-center gap-2'><span className='text-red-500 flex'>{ratings >= 460 ? (<><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>) : ratings >= 360 ? (<><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></>) : (<><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></>) }</span>Ratings : {ratings}</p>

                        <p className='font-semibold text-gray-700'>{description}</p>

                        <div className='font-bold text-2xl text-blue-600 flex flex-row gap-6'>
                            {
                                tags.map((item, idx) => <span key={idx} className='flex items-center gap-1'><FaRegCircleDot className='text-sm'/> {item}</span>)
                            }
                        </div>

                        <p className='font-semibold'>Size : <span className='text-3xl font-bold'>{dimensions}</span></p>

                        <p className='font-semibold'>Price : <span className='text-2xl font-bold text-green-500'>{price} $</span></p>

                        <p className='font-semibold'>Materials : <span className='text-2xl font-bold text-blue-600'>{material}</span></p>

                        <p className='font-semibold'>Category : <span className='text-2xl font-bold'>{category}</span></p>

                        <p className='font-semibold'>Brand Name : <span className='text-2xl font-bold text-green-500'>{brand}</span></p>

                        <div className='flex gap-3'>
                            <button className='btn w-50 bg-pink-500 text-white hover:bg-gray-900'>Buy Now</button>
                            <button className='btn w-50 bg-blue-500 text-white hover:bg-gray-900'>Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default TileDetailsPage;
