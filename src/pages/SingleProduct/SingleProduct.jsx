import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const product = useLoaderData();
    // console.log(product);
    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;
    return (
        <div>
            <h2>Single Product</h2>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toys_name}</h2>
                    <p>{quantity}</p>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to="/allToys" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;