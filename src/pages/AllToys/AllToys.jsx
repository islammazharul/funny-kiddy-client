import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const [searchName, setSearchName] = useState("")

    useEffect(() => {
        fetch("http://localhost:6500/allProducts")
            .then(res => res.json())
            .then(data => {
                // const toy = data.slice(0, 20);
                setAllToys(data)
            })
    }, [])

    const handleSearch = () => {
        console.log("hello");
        fetch(`http://localhost:6500/getProductsByName/${searchName}`)
            .then(res => res.json())
            .then(data => {
                setSearchName(data)
                console.log(data);
            })
    }




    return (
        <div>
            <h2>Your Product {allToys?.length}</h2>
            <div className="overflow-x-auto w-full bg-indigo-300">

                <div className="form-control lg:w-11/12 mx-auto my-3">
                    <div className="input-group">
                        <input onChange={(e) => setSearchName(e.target.value)}
                            type="text" placeholder="Search…" className="input input-bordered w-full" />
                        <button onClick={() => handleSearch()} className="btn btn-square">
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
                            allToys.map((toy, index) => <Toys
                                key={toy._id}
                                toy={toy}
                                index={index}
                            ></Toys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;