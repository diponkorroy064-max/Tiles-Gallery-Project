import React from 'react';

const TileDetailsPage = async({ params }) => {
    const { id } = await params;
    // console.log("Clicked id by params", id);

    return (
        <div className='container mx-auto px-10 py-15'>
            <div className=" card lg:card-side bg-base-100 shadow-sm border ">
                <figure>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default TileDetailsPage;
