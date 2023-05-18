import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img src="https://i.ibb.co/m69Sn9x/undraw-Page-not-found-re-e9o6.png" alt="" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;