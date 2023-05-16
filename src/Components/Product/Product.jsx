import React from 'react';

const Product = (props) => {
    // console.log();
    const handelAddToCart = props.handelAddToCart;
    const { _id,name, price, img, seller, ratings } = props.product
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img ? img :"https://source.unsplash.com/random/300x200"} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className="text-3xl pb-10">Price: ${price}</h4>
                    <p className='text-lg'>Manufacturer: {seller}</p>
                    <p  className='text-lg'>Rating: {ratings} Star</p>
                   
                </div>
                <div className="card-actions mx-0 px-0 w-full">
                    <button onClick={() => { handelAddToCart(props.product)}} className="btn w-full bg-[#FFE0B3] border-none hover:bg-yellow-500 text-black"> Add To Cart </button>
                </div>
            </div>
        </>
    );
};

export default Product;