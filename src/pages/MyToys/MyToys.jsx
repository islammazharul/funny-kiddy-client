import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyProducts from '../MyProducts/MyProducts';


const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:6500/myProducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [user, control])

    const handleDeleteProduct = _id => {
        console.log(_id);
        fetch(`http://localhost:6500/deleteProduct/${_id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setControl(!control)
            })
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-center text-3xl mt-5'>Your Total products: {products?.length}</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={product._id}>
                            <th className='font-bold'>{index + 1}</th>
                            <th className='font-bold'>{product.toys_name}</th>
                            <th className='font-bold'>{product.sub_category}</th>
                            <th className='font-bold'>$ {product.Price}</th>
                            <th className='font-bold'>{product.quantity}</th>
                            <th>
                                <MyProducts
                                    product={product}
                                ></MyProducts>
                            </th>
                            <th><button onClick={() => handleDeleteProduct(product._id)} className="btn btn-sm bg-slate-800 border-0">Delete</button></th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;