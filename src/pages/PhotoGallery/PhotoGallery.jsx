import React from 'react';

const PhotoGallery = () => {
    return (
        <div className='lg:py-8'>
            <h1 className='text-5xl font-bold mb-8 text-center mt-12'>PHOTO GALLERY</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:w-[60%] w-[96%] mx-auto gap-1 mt-5'>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/bW9gZN4/car-14.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/BybzGQ2/car-18.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/ZdWyGjH/car-12.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/Qjzt8BT/car-11.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/QrTw4bd/car-10.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/PgGpDSG/car-9.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/6Br13v4/car-8.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/RDx6cwL/car-4.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  w-50 h-50 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/d0XGZh8/car-6.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;