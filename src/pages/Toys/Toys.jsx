import React from 'react';

const Toys = ({ toy, index }) => {
    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = toy;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{toys_name}</td>
                <td>{sub_category}</td>
                <td>{seller_name}</td>
                <td>{Price}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-sm bg-red-300">View Details</button></td>
            </tr>
        </>
    );
};

export default Toys;