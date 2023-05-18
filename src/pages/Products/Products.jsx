import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    const [tab, setTab] = useState(1);

    useEffect(() => {
        fetch("http://localhost:6500/allProducts")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    const handleTab = tabNumber => {
        setTab(tabNumber)


    }
    // const all = products.map(product => )
    const bus = products.filter(product => product.sub_category === "bus");
    const tructar = products.filter(product => product.sub_category === "Tructar");
    const car = products.filter(product => product.sub_category === "Police-car");

    const product = tab === 1 ? bus : tab === 2 ? tructar : tab === 3 ? car : null;

    return (
        <div className='text-center'>
            <div className=" flex justify-center tabs tabs-boxed">
                <a onClick={() => handleTab(1)}
                    className="tab" style={{ backgroundColor: tab === 1 ? "red" : "" }}>bus</a>
                <a onClick={() => handleTab(2)} className="tab"
                    style={{ backgroundColor: tab === 2 ? "red" : "" }}>tructar</a>
                <a onClick={() => handleTab(3)} className="tab"
                    style={{ backgroundColor: tab === 3 ? "red" : "" }}>racing car</a>
            </div>
            <div>
                {
                    // product?.map(toy => )
                }
            </div>
        </div>
    );
};

export default Products;