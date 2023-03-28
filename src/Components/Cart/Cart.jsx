import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    let price=0;
    let shipping=0;
    let quentity=0
    for (const product of cart) {
        // product.quantity = product.quantity||1;
        // console.log(product.quantity + quentity);
        price = price + product.price * product.quantity
        shipping = product.shipping+shipping
        quentity = product.quantity + quentity;

        
    }
    // console.log(price);
    const tax=(price*7/100)
    const total = price + shipping + tax
    // console.log(quentity);
    return (
        <div>
            <h1 className='text-3xl text-center my-9'>Total Product:{cart.length}</h1>
            <div className='ml-14'>
                <p className='my-2'>Selected Items: {quentity}</p>
                <p className='my-2'>Total Price: {price}</p>
                <p className='my-2'>Total Shipping Charge:{shipping} </p>
                <p className='my-2'>TAX:{tax.toFixed(2)} </p>
                <h3 className='my-2'>Grand Total:{total.toFixed(2)} </h3>
            </div>
            <div className='flex items-center flex-col my-9'>
                <button className="btn btn-wide bg-red-600 block text-center border-none hover:bg-red-500 my-9">Clear Cart</button>
                <button className="btn btn-wide bg-[#FF9900] block text-center border-none hover:bg-[#d48b1d] ">Review Order</button>

            </div>


        </div>
    );
};

export default Cart;