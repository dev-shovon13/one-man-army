import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Header from '../Header/Header';
import './Shop.css'

const Shop = () => {
    // set data into UI 
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])
    const [searchProducts, setSearchProducts] = useState([])

    // load data 
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProducts(data)
            })
    }, [])
    // search equipment
    const searchProduct = (event) => {
        const searchText = event.target.value
        console.log(searchText);
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchProducts(matchedProducts)
    }
    // add items to added list 
    const orderProduct = product => {
        if ([...order].indexOf(product) === -1) {
            const newList = [...order, product]
            setOrder(newList);
        }
    }
    // total price calculation 
    let total = 0
    for (const item of order) {
        total = total + item.price
    }
    return (
        <div>
            {/* loading Header component from another file  */}
            <Header searchProduct={searchProduct} />
            {/* product section  */}
            <div className=" product-section">
                <div className="container row mx-auto ">
                    {/* showing equipments  */}
                    <div className="row g-4 mt-1 col-9 col-md-10 col-lg-11">
                        {
                            searchProducts.map(product => {
                                return (
                                    <Product key={product.id} product={product} orderProduct={orderProduct} />
                                )
                            })
                        }
                    </div>
                    {/* showing orderwd items  */}
                    <div className=" sidenav col-4 col-md-3 col-lg-2 bg-light text-secondary  border border-light shadow-sm order-item">
                        <div className="bg-secondary text-white p-2 rounded ">
                            <h5><small>Total Orders: </small><span className="text-primary bg-light px-2 rounded fw-bold">{order.length}</span> </h5>
                            <p>Total Price: <span className="text-warning fw-bold">$ </span><span className="bg-light px-1 rounded text-success"> {total} </span></p>
                        </div>
                        <h5 className=" text-center mb-2 pb-2 border-bottom border-2 border-secondary">Ordered Items</h5>
                        {
                            order.map(item => {
                                return (
                                    <div key={item.id} className="d-flex mb-2 align-items-center">
                                        <img src={item.img} alt="" className="w-25" />
                                        <p className="bg-secondary text-white fw-bold border rounded p-1 mb-1 text-center">{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;