import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [tab, setTab] = useState(1);

    useEffect(() => {
        fetch("http://localhost:6500/allProducts")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [])

    const handleTab = tabNumber => {
        setTab(tabNumber)


    }
    // const all = products.map(product => )
    const Racing = products.filter(product => product.sub_category === "Racing-Car");
    const Action = products.filter(product => product.sub_category === "Action-Car");
    const Police = products.filter(product => product.sub_category === "Police-Car");

    const product = tab === 1 ? Racing : tab === 2 ? Action : tab === 3 ? Police : null;

    return (
        <div className='text-center mt-12'>
            <h1 className='text-5xl font-bold mb-8'>Shop by Category</h1>
            <div className="flex justify-center space-x-4 tabs tabs-boxed py-5 lg:w-1/2 mx-auto">
                <a onClick={() => handleTab(1)}
                    className="tab text-xl font-bold" style={{ backgroundColor: tab === 1 ? "#e31471" : "" }}>Racing-Car</a>
                <a onClick={() => handleTab(2)} className="tab text-xl font-bold"
                    style={{ backgroundColor: tab === 2 ? "#e31471" : "" }}>Action-Car</a>
                <a onClick={() => handleTab(3)} className="tab text-xl font-bold"
                    style={{ backgroundColor: tab === 3 ? "#e31471" : "" }}>Police-Car</a>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:my-5 mx-auto lg:w-10/12 gap-4'>
                {
                    product?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;