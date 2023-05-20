import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <h2>Single Product</h2>
        </div>
    );
};

export default SingleProduct;