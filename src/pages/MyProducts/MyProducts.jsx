import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const MyProducts = ({ product, index, handleDeleteProduct }) => {

    const { _id, toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;

    const { user } = useContext(AuthContext)

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const product = { price, quantity, details }
        form.reset()
        console.log(product);

        fetch(`http://localhost:6500/updateProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    const handleId = _id => {
        console.log("id", _id);
    }


    return (
        <>
            {/* The button to open modal */}
            < label onClick={() => handleId(_id)} htmlFor="my-modal-5" className="btn btn-sm bg-green-500 border-0">Update</label>

            {/* Put this part before </body> tag */}
            < input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='border-4 pl-3 bg-indigo-200'>
                        <h1 className="text-2xl font-bold text-center">Update Your Product!</h1>
                        <form onSubmit={handleUpdateProduct}>
                            {/* {errors.exampleRequired && <span>This field is required</span>} */}

                            <div className='me-3'>

                                <label className='font-bold'>Price</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    name="price"
                                    type="number"
                                    // {...register("Price", { required: true })}
                                    placeholder="Price"
                                    defaultValue={Price}
                                />
                                <label className='font-bold'>Available Quantity</label>
                                <input
                                    className="input w-full max-w-xs block mb-3"
                                    // {...register("quantity", { required: true })}
                                    placeholder={quantity}
                                    type="number"
                                    name="quantity"
                                />
                                <label className='font-bold block'>Details Description</label>
                                <input
                                    className="textarea w-full max-w-xs"
                                    // {...register("Description")}
                                    placeholder={Description}
                                    type="text"
                                    name="details"
                                />
                            </div>
                            <button className="btn btn-primary w-full mt-3" type='submit'>Update</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProducts;