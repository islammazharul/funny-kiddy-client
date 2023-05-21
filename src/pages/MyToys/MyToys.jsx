import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyProducts from '../MyProducts/MyProducts';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);
    useTitle("My Toys")

    useEffect(() => {
        fetch(`https://funny-kiddy-server.vercel.app/myProducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [user, control])

    const handleDeleteProduct = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://funny-kiddy-server.vercel.app/deleteProduct/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setControl(!control)
                        }
                    })
            }
        })



    }

    const handleAscending = () => {
        fetch(`https://funny-kiddy-server.vercel.app/ascending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }
    const handleDescending = () => {
        fetch(`https://funny-kiddy-server.vercel.app/descending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-center text-3xl mt-5'>Your Total products: {products?.length}</h2>
            <button onClick={handleAscending} className='btn btn-accent'>Ascending</button>
            <button onClick={handleDescending} className='btn btn-secondary'>Descending</button>
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