import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleProduct = () => {
    const product = useLoaderData();
    useTitle("Single Product")
    // console.log(product);
    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-8'>Toy's Information</h2>
            <div class="lg:w-2/3 mx-auto rounded-lg shadow-md lg:flex md:flex shadow-sky-600">
                <img
                    class="object-cover w-full md:w-1/2 lg:w-1/2"
                    src={image}
                    alt="image"
                />
                <div class="px-6 py-4">
                    <h4 class="mb-3  text-base font-bold tracking-tight text-sky-600">
                        Toys Name :  {toys_name}
                    </h4>
                    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
                        Category :  {category}
                    </h4>
                    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
                        Sub-Category :  {sub_category}
                    </h4>
                    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
                        Seller :  {seller_name}
                    </h4>
                    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
                        Email :  {postedBy}
                    </h4>
                    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
                        Available Quantity :  {quantity}
                    </h4>
                    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
                        Price : {Price}
                    </h4>
                    <div className='text-start'><div className="rating w-30">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
                        <span>{Rating}</span>
                    </div></div>
                    <p class="mb-2 text-sm leading-normal text-justify text-sky-900">
                        Product Description :  {Description}
                    </p>
                    <Link to={"/"}
                        class="
                            px-4
                            py-2
                            text-sm
                            shadow
                            bg-sky-100
                            shadow-sky-600
                            text-sky-700
                            hover:bg-sky-600 hover:text-sky-100">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;