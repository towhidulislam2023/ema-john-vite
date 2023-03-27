import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const handelAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products);

    return (
        <>
            <div className='flex gap-5'>
                <div className='w-[75%]  my-5 mx-2 p-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handelAddToCart={handelAddToCart}
                            ></Product>)
                        }
                    </div>



                </div>
                <div className='w-[25%] h-screen  bg-[#f39e1e6c] mx-2'>
                    <h1 className='text-center text-4xl font bold'>Total Product : {cart.length}</h1>

                </div>
            </div>

        </>
    );
};

export default Shop;