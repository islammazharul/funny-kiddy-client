
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddToys = () => {
    const { user } = useContext(AuthContext)
    useTitle("Add Toys")

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch("https://funny-kiddy-server.vercel.app/post-products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex">

                <div className='border-4 pl-3 lg:p-8 bg-indigo-200'>
                    <h1 className="text-5xl font-bold text-center mb-8">Please Add Your Product!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='lg:flex justify-between'>
                            <div className='me-4'>
                                <label className='font-bold'>Image URL</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("image")}
                                    placeholder="image link"
                                    type="url"
                                // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <label className='font-bold'>Toys Name</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("toys_name")}
                                    placeholder="Name"

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
                                    {...register("Description")}
                                    placeholder="Description"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className='font-bold'>Seller Name</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    // value={user?.displayName}
                                    {...register("seller_name")}
                                    placeholder="Name"

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
                                <label className='font-bold'>Category</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    {...register("category", { required: true })}
                                    placeholder="Category"
                                    defaultValue="Toy Cars"
                                />
                                <label className='font-bold'>Sub-Category</label>
                                <select className="select select-bordered w-full max-w-xs"
                                    {...register("sub_category")}
                                >

                                    <option disabled select="true">Sub-Category</option>
                                    <option>Sports-Car</option>
                                    <option>Regular-Car</option>
                                    <option>Police-Car</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full mt-3" type='submit'>Add a Toy</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddToys;