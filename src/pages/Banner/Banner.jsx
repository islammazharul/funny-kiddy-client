import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:min-h-0 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <img className='lg:w-9/12' src="https://i.ibb.co/DLJ0pGB/banner-1.png" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;