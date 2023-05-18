import React from 'react';

const Product = ({ product }) => {
    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-4/6" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toys_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
