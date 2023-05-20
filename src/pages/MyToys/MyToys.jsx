import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyProducts from '../MyProducts/MyProducts';
// import { Link, useLoaderData } from 'react-router-dom';


const MyToys = () => {
    // const product = useLoaderData();
    // console.log(product);
    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:6500/myProducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [user])

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
                                    key={product._id}
                                    product={product}
                                ></MyProducts>
                            </th>
                            {/* < Link to={`/updateProduct/${product._id}`} htmlFor="my-modal-5" className="btn btn-sm bg-green-500 border-0">Update</Link> */}
                            {/* <th><button className="btn btn-sm bg-red-400 border-0">View Details</button></th> */}
                            {/* <th><button onClick={handleUpdateProduct} className="btn btn-sm bg-green-400 border-0">Update</button></th> */}
                            <th><button className="btn btn-sm bg-slate-800 border-0">Delete</button></th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;