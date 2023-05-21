import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;
    return (
        <div className=" w-96 h-full bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
                <img src={image} alt="Car" className=" h-60 w-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{toys_name}</h2>
                <p className='text-start font-bold'>Price : $ <span className='text-indigo-800 text-2xl'>{Price}</span></p>
                <div className="card-actions flex justify-between items-center">
                    <Link to={`/singleProduct/${_id}`} className="bg-pink-600 text-white rounded-3xl px-3 py-1 text-sm shadow-xl">View Details</Link>
                    <div className='text-end'><div className="rating w-20">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
                        <span>{Rating}</span>
                    </div></div>
                </div>
            </div>
        </div>
    );
};

export default Product;
