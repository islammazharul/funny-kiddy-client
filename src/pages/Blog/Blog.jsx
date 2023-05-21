import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <div className='w-full mb-5'>
                <div className='w-11/12 sm: mx-auto'>
                    <h3 className='text-3xl text-purple-700 text-center font-bold'>-Educational Info-</h3>
                    <div className='bg-purple-100 mt-6 p-5 shadow-xl'>
                        <h4 className='text-2xl text-purple-700 font-bold'>a. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                        <p className='font-bold'>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.<br /><br />We are store them into the Web Storage (Local Storage and Session Storage),Cookies (Session Cookies & Persistent Cookies),IndexedDB,Cache API,File system storage.</p>
                    </div>
                    <div className='bg-purple-100 mt-6 p-5 shadow-xl'>
                        <h4 className='text-2xl text-purple-700 font-bold'>b. Compare SQL and NoSQL databases?</h4>
                        <p className='font-bold'>SQL databases are vertically scalable.This databases are table-based and better for multi-row transactions.<br />On the other hand, NoSQL databases are horizontally scalable and this type of databases are document, key-value, graph, or wide-column stores.NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className='bg-purple-100 mt-6 p-5 shadow-xl'>
                        <h4 className='text-2xl text-purple-700 font-bold'>c. What is express js? What is Nest JS?</h4>
                        <p className='font-bold'>Express.js is the most popular web framework for Node.js.It is a free and open-source web application framework for Node.js<br />NestJS is a progressive Node.js framework that helps build server-side applications.</p>
                    </div>
                    <div className='bg-purple-100 mt-6 p-5 shadow-xl'>
                        <h4 className='text-2xl text-purple-700 font-bold'>d. What is MongoDB aggregate and how does it work?</h4>
                        <p className='font-bold'>MongoBD Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.<br />In MongoDB, aggregation operations process the data records/documents and return computed results.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;