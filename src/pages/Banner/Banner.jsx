import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:min-h-0 bg-violet-200 relative">
            <img className='w-full' src="https://i.ibb.co/c8fQdcy/banner-1.jpg" alt="" />
            {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
            {/* <div className='lg:w-1/2'>
                    <img className='lg:w-9/12' src="https://i.ibb.co/DLJ0pGB/banner-1.png" />
                    https://i.ibb.co/DLJ0pGB/banner-1.png
                </div> */}
            <div className='lg:space-y-8 px-5 absolute sm:h-1/2 right-0 sm:w-1/2 text-white text-end'>
                <h1 className="lg:text-6xl font-bold">Cute toys for<br />Cute children!</h1>
                <p className="text-slate-300">Buy all kinds of intellectual games,girl's toys,boy's toys,puzzles in our online store and give your child the pleasure of entertainment.</p>
                <button className="px-4 lg:py-2 bg-pink-600 rounded-3xl text-white shadow-2xl">Get Started</button>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Banner;