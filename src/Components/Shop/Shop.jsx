import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
   
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products);

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        // console.log(storedCart);
        //!........................................
        // ! step-1 get id
        //!.......................................
        for (const id in storedCart) {
            // console.log(id);
            //!........................................
            // ! step-2 get product by id using find matthod
            //!.......................................
            const AddedProduct = products.find(product => id === product.id)
            //!........................................
            // ! step-3 set product quantity
            //!.......................................
            if (AddedProduct) {
                const quantity = storedCart[id]
                AddedProduct.quantity = quantity
                //!........................................
                // ! step-4 added product to the saveCard
                //!.......................................
                savedCart.push(AddedProduct)
            }

            // console.log(AddedProduct);

        }
        //!........................................
        // ! step-5 Set the card
        //!.......................................
        setCart(savedCart)

    }, [products])

    const handelAddToCart = (product) => {
        //if product doesnt exist in the cart,then set quantity 1
        //if exist ,then set quantity by 1
        let newCart=[];
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity=1;
            newCart = [...cart, product]
            
        }
        else{
            exist.quantity=exist.quantity+1
            const remainingProduct=cart.filter(pd=>pd.id !== product.id)
            newCart = [...remainingProduct, exist]
        }
        // const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    const handelClearCart =()=>{
        setCart([])
        deleteShoppingCart()
    }
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
                <div className='w-[25%] h-screen  bg-[#f39e1e6c] mx-2 sticky top-0'>
                    <Cart cart={cart} handelClearCart={handelClearCart}>
                        <Link to={'/review'}><button className="btn btn-wide bg-[#FF9900] block text-center border-none hover:bg-[#d48b1d] ">Review Order</button></Link>
                        </Cart>
                </div>
            </div>

        </>
    );
};

export default Shop;