
import React from 'react';
import { useForm } from 'react-hook-form';

const AddToys = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex">

                <div className='border-4 p-8 bg-indigo-200'>
                    <h1 className="text-5xl font-bold text-center mb-8">Please Add Your Product!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='flex justify-between'>
                            <div className='me-4'>
                                <label className='font-bold'>Image URL</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("image")}
                                    placeholder="image link"
                                    type="url"
                                    defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <label className='font-bold'>Toys Name</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("toys_name")}
                                    placeholder="Name"
                                    defaultValue=""
                                />
                                <label className='font-bold'>Price</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("Price", { required: true })}
                                    placeholder="Price"
                                    defaultValue="30"
                                />
                                <label className='font-bold'>Available Quantity</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("quantity", { required: true })}
                                    placeholder="Quantity"
                                    type="number"
                                />
                                <label className='font-bold'>Details Description</label>
                                <input
                                    className="textarea w-full max-w-xs"
                                    // value={user?.email}
                                    {...register("Description")}
                                    placeholder="Description"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className='font-bold'>Seller Name</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("seller_name")}
                                    placeholder="Name"
                                    defaultValue=""
                                />
                                <label className='font-bold'>Seller Email</label>
                                <input
                                    className="input w-full max-w-xs"
                                    // value={user?.email}
                                    {...register("postedBy")}
                                    placeholder="your email"
                                    type="email"
                                />
                                <label className='font-bold'>Rating</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("Rating", { required: true })}
                                    placeholder="Rating"
                                    defaultValue="4.5"
                                />
                                <label className='font-bold'>Sub-Category</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("sub_category", { required: true })}
                                    placeholder="Sub-Category"

                                />
                            </div>
                        </div>
                        <button className="btn btn-primary w-full mt-3">Add a Toy</button>
                    </form>
                </div>
                {/* <div>
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                </div> */}
            </div>
        </div>
    );
};

export default AddToys;