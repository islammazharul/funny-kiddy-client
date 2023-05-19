import React from 'react';

const MyProducts = ({ product, index }) => {

    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = product;

    return (

        <tr>
            <th>{index + 1}</th>
            <th>{toys_name}</th>
            <th>{sub_category}</th>
            <th>{Price}</th>
            <th>{quantity}</th>
            <th><button className="btn btn-sm bg-red-400 border-0">View Details</button></th>
            <th><button className="btn btn-sm bg-green-400 border-0">Update</button></th>
            <th><button className="btn btn-sm bg-slate-800 border-0">Delete</button></th>
        </tr>

    );
};

export default MyProducts;