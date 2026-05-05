import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
            <p>Tiles Loading...</p>
            <p><HashLoader /></p>
        </div>
    );
};

export default loading;