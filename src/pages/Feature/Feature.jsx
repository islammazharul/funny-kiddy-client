import React from 'react';

const Feature = () => {
    return (
        <div className="bg-black lg:w-10/12 mx-auto">
            <section className="container items-center px-4 mx-auto mt-20 lg:flex justify-between lg:px-20">
                <div className="flex-1 space-y-4 sm:text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl font-bold text-yellow-500">
                        Improve Child's Brain Growth
                    </h1>
                    <p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0">
                        Our members can borrow fully assembled larger items from just $10 a month each (minimum 3 months), with no purchasing to throw away, or batteries to find.
                    </p>
                    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a
                            // href="javascript:void(0)"
                            className="block lg:px-6 py-2 text-center text-white bg-yellow-600 rounded-md"
                        >
                            Online Store
                        </a>
                        <a
                            // href="javascript:void(0)"
                            className="block lg:px-6 py-2 text-center text-gray-500 bg-white rounded-md"
                        >
                            See More
                        </a>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <div className="carousel">
                        <div id="slide1" className="carousel-item flex items-center relative w-full">
                            <img src="https://i.ibb.co/HnJ42yW/car-1.jpg" className="w-full my-4" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn-sm ">❮</a>
                                <a href="#slide2" className="btn-sm ">❯</a>
                            </div>
                        </div>

                        <div id="slide4" className="carousel-item flex items-center relative w-full">
                            <img src="https://i.ibb.co/BybzGQ2/car-18.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn-sm">❮</a>
                                <a href="#slide1" className="btn-sm">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;