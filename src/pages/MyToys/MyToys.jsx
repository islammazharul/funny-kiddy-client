import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyProducts from '../MyProducts/MyProducts';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:6500/myProducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [user])

    return (
        <div className="overflow-x-auto">
            <h2 className='text-center text-3xl mt-5'>Your Total products: {products?.length}</h2>
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <MyProducts
                            key={product._id}
                            product={product}
                            index={index}
                        ></MyProducts>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;