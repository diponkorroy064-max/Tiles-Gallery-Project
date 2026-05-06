import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex flex-col justify-center items-center my-8'>
            <p>Tiles Loading...</p>
            <p><HashLoader /></p>
        </div>
    );
};

export default loading;