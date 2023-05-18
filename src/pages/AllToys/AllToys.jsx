import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6500/allProducts")
            .then(res => res.json())
            .then(data => {
                const toy = data.slice(0, 20);
                setAllToys(toy)
            })
    }, [])




    return (
        <div>
            {/* <h2>Your Booking {booking?.length}</h2> */}
            <div className="overflow-x-auto w-full bg-blue-500">
                <table className="table lg:w-11/12 mx-auto ">
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
                            // handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></Toys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;