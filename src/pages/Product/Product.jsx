import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;
    return (
        <div className="card w-96 h-full bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
                <img src={image} alt="Car" className="rounded-lg h-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{toys_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link className="bg-pink-600 text-white rounded-3xl px-3 py-1 text-sm shadow-xl">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
