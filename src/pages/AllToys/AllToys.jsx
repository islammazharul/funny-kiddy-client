import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllToys = () => {




    return (
        <div>
            {/* <h2>Your Booking {booking?.length}</h2> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

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
                            // booking.map(books => <Toys
                            //     key={books._id}
                            //     books={books}
                            //     handleDelete={handleDelete}
                            //     handleBookingConfirm={handleBookingConfirm}
                            // ></Toys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;