import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyProducts from '../MyProducts/MyProducts';
// import { Link } from 'react-router-dom';


const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])
    // const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        fetch(`http://localhost:6500/myProducts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [user])

    // const handleUpdateProduct = id => {
    //     console.log(id);
    //     fetch(`http://localhost:6500/updateProduct/${data._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // }

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
                        {/* <th>Details</th> */}
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr>
                            <th className='font-bold'>{index + 1}</th>
                            <th className='font-bold'>{product.toys_name}</th>
                            <th className='font-bold'>{product.sub_category}</th>
                            <th className='font-bold'>$ {product.Price}</th>
                            <th className='font-bold'>{product.quantity}</th>
                            <th>
                                {/* <button onClick={() => setModalShow(true)}>Update</button> */}
                                <MyProducts
                                    // show={modalShow}
                                    // onHide={() => setModalShow(false)}
                                    key={product._id}
                                    product={product}
                                // handleUpdateProduct={handleUpdateProduct}
                                ></MyProducts>
                            </th>
                            {/* <th><button className="btn btn-sm bg-red-400 border-0">View Details</button></th> */}
                            {/* <th><button onClick={handleUpdateProduct} className="btn btn-sm bg-green-400 border-0">Update</button></th> */}
                            <th><button onClick={"handleDeleteProduct"} className="btn btn-sm bg-slate-800 border-0">Delete</button></th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;