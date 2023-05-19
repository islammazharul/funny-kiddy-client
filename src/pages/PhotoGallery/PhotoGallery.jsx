import React from 'react';

const PhotoGallery = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-12'>Photo Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:w-[60%] w-[96%] mx-auto gap-1 mt-5'>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;