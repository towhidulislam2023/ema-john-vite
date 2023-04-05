import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OfferDetails from '../OfferDetails/OfferDetails';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const OrderReview = () => {
    const products  = useLoaderData()
    const [cart, setCart] = useState(products)
    const handelRemoveItem=(id)=>{
        console.log(id);
        const remainingProduct=cart.filter(pd=>pd.id!==id);
        setCart(remainingProduct);
        removeFromDb(id)
    }
    const handelClearCart =()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-[75%]  my-5 mx-2 p-10'>
                    <div className='flex justify-center items-center'>
                        <div>
                            {
                                cart.map(product => <OfferDetails key={product.id} product={product} handelRemoveItem={handelRemoveItem}  ></OfferDetails>)
                            }
                        </div>
                    </div>
                </div>
                <div className='w-[25%] h-screen  bg-[#f39e1e6c] mx-2 sticky top-0'>
                    <Cart cart={cart} handelClearCart={handelClearCart}>
                        <button className="btn btn-wide bg-[#FF9900] block text-center border-none hover:bg-[#d48b1d] ">Proceed Checkout</button>
                        </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;