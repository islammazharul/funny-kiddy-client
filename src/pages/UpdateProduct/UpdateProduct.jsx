import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product);
    const { _id, toys_name, quantity, image, category, Price, Description } = product;


    const handleUpdateProduct = event => {
        event.preventDefault();
        // const form = 
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-4xl font-semibold'>Updated a Product</h2>
            <form onSubmit={"handleUpdateProduct"}>
                <div className='md:flex' >
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={toys_name} placeholder="Enter coffee name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter Available Quantity" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex' >
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={Price} placeholder="Enter coffee supplier" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' defaultValue={Description} placeholder="Enter coffee taste" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                {/* <div className='md:flex' >
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div> */}
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' defaultValue={image} placeholder="Enter coffee photo url" className="input input-bordered  w-full" />
                    </label>
                </div>
                <input type='submit' value='Update Your Product' className="btn btn-block mt-6" />
            </form>
        </div>
    );
};

export default UpdateProduct;