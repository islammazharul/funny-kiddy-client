import React from 'react';

const Message = () => {
    return (
        <div className='lg:flex lg:w-10/12 mx-auto my-10'>
            <div className=" lg:w-full bg-gray-700 shadow-md  lg:p-10">
                <h2 className='text-2xl text-white ml-4'>Leave Your Comment</h2>
                <form action="" className="w-full p-4">
                    <label className="block mb-2">
                        <span className="text-white">Your Name</span>
                        <input className="block w-full mt-1 rounded" placeholder='Type Your Name' type="text" name="name" id="" />
                    </label>
                    <label className="block mb-2">
                        <span className="text-white">Your Email</span>
                        <input className="block w-full mt-1 rounded" placeholder='Type Your Email' type="email" name="email" id="" />
                    </label>
                    <label className="block mb-2">
                        <span className="text-white">Add a comment</span>
                        <textarea className="block w-full mt-1 rounded" placeholder='Type Your Comment' rows="3"></textarea>
                    </label>
                    <button className="px-3 py-2 text-sm text-blue-100 bg-pink-600">Send</button>
                </form>
            </div>
            <div>
                <img src="https://i.ibb.co/p2hDd7T/undraw-reviews-lp8w.png" alt="" />
            </div>
        </div>
    );
};

export default Message;