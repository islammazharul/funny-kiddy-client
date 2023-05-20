import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetch("http://localhost:6500/allProducts")
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:6500/getProductsByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }


    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>All Product {allToys?.length}</h2>
            <div className="overflow-x-auto w-full bg-indigo-300">
                <div className="form-control lg:w-11/12 mx-auto my-3">
                    <div className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)}
                            type="text" placeholder="Search…" className="input input-bordered w-full" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <table className="table lg:w-11/12 mx-auto  mb-3">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Sl No.
                            </th>
                            <th>Name</th>
                            <th>Sub-Category</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.length > 0 && <>
                                {
                                    allToys.map((toy, index) =>
                                        <tr key={toy._id}>
                                            <th className='font-bold'>{index + 1}</th>
                                            <td className='font-bold'>{toy.toys_name}</td>
                                            <td className='font-bold'>{toy.sub_category}</td>
                                            <td className='font-bold'>{toy.seller_name}</td>
                                            <td className='font-bold'>$ {toy.Price}</td>
                                            <td className='font-bold'>{toy.quantity}</td>
                                            <td><Link to={`/singleProduct/${toy._id}`} className="btn btn-sm bg-red-400 border-0">View Details</Link></td>
                                        </tr>
                                    )
                                }
                            </>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;