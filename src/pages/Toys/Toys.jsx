import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ toy, index }) => {
    const { toys_name, sub_category, seller_name, quantity, postedBy, image, category, Rating, Price, Description } = toy;
    return (
        <>
            <tr>
                <th className='font-bold'>{index + 1}</th>
                <td className='font-bold'>{toys_name}</td>
                <td className='font-bold'>{sub_category}</td>
                <td className='font-bold'>{seller_name}</td>
                <td className='font-bold'>$ {Price}</td>
                <td className='font-bold'>{quantity}</td>
                <td><Link className="btn btn-sm bg-red-400 border-0">View Details</Link></td>
            </tr>
        </>
    );
};

export default Toys;