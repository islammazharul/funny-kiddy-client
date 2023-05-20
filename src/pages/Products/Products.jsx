import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [tab, setTab] = useState("Action-Car");

    useEffect(() => {
        fetch(`http://localhost:6500/allProducts/${tab}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [tab])

    const result = products.filter((product) => product.sub_category == tab);
    console.log(result);

    const handleTab = tabNumber => {
        setTab(tabNumber)


    }


    return (
        <div className='text-center shadow-2xl lg:py-10'>
            <h1 className='text-5xl font-bold mt-5 mb-8'>SHOP BY CATEGORY</h1>

            <div className="flex justify-center space-x-4 tabs tabs-boxed lg:py-4 lg:w-1/3 mx-auto">
                <a onClick={() => handleTab("Racing-Car")}
                    className={`tab font-bold ${tab == "Racing-Car" ? " bg-red-500 text-white font-bold" : ""
                        }`}>SPORTS-CAR</a>
                <a onClick={() => handleTab("Action-Car")} className={`tab font-bold ${tab == "Action-Car" ? " bg-red-500 text-white font-bold" : ""
                    }`}
                >REGULAR-CAR</a>
                <a onClick={() => handleTab("Police-Car")} className={`tab font-bold ${tab == "Police-Car" ? " bg-red-500 text-white font-bold" : ""
                    }`}
                >POLICE-CAR</a>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:my-5 mx-auto lg:w-10/12 gap-4'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div >
    );
};

export default Products;