import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OfferDetails = ({ product, handelRemoveItem }) => {
    const { _id,img, name, quantity, price, shipping } = product;
    return (

        <div className='flex md:w-[578px] border-2 items-center md:gap-10 my-5 py-2 px-3 rounded-lg'>
            <img className='h-32 w-32 rounded-lg' src={img} alt="" />
            <div className='flex-grow'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-lg font-semibold'>Price: $<span className='text-yellow-600 font-bold'>{price}</span></p>
                <p className='text-lg font-semibold'>Quantity: {quantity}</p>
                <p className='text-lg font-semibold'>Shipping Charge:{shipping}</p>
            </div>
            <button onClick={() => handelRemoveItem(_id)} className=' bg-red-500 p-3  rounded-full flex justify-center items-center bg-opacity-30'> <FontAwesomeIcon className='h-7 w-7' icon={faTrashCan} style={{ color: "#cb4343", }} /></button>
        </div>
    );
};

export default OfferDetails;