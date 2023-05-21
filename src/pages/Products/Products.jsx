import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [tab, setTab] = useState("Sports-Car");

    useEffect(() => {
        fetch(`https://funny-kiddy-server.vercel.app/allProducts/${tab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [tab])

    const result = products.filter((product) => product.sub_category == tab);
    console.log(result);

    const handleTab = tabNumber => {
        setTab(tabNumber)


    }


    return (
        <div className='text-center lg:py-10'>
            <h1 className='text-5xl font-bold mt-5 mb-8'>SHOP BY CATEGORY</h1>

            <div className="flex justify-center space-x-4 tabs tabs-boxed lg:py-4 lg:w-1/3 mx-auto">
                <a onClick={() => handleTab("Sports-Car")}
                    className={`tab font-bold ${tab == "Sports-Car" ? " bg-red-500 text-white font-bold" : ""
                        }`}>SPORTS-CAR</a>
                <a onClick={() => handleTab("Regular-Car")} className={`tab font-bold ${tab == "Regular-Car" ? " bg-red-500 text-white font-bold" : ""
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

            <div className=" stats-vertical shadow lg:flex lg:w-10/12 mx-auto">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">6.6K</div>
                    <div className="stat-desc">26% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">3.6M</div>
                    <div className="stat-desc">35% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    </div>
                    <div className="stat-value">75%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">67 tasks remaining</div>
                </div>

            </div>

        </div >
    );
};

export default Products;