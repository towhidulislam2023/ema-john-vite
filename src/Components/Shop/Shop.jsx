import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    const { totalProduct } = useLoaderData()
    console.log(totalProduct);
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setitemsPerpage] = useState(10)
    const [cart, setCart] = useState([])
    // const itemsPerPage = 10
    const totalPage = Math.ceil(totalProduct / itemsPerPage)
    const pageNumber = [...Array(totalPage).keys()]
    const options = [5, 10, 15, 20]
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemsPerPage]);
    // console.log(products);
    const handelSelectChange = (event) => {
        setitemsPerpage(parseInt(event.target.value))
        // console.log(event.target.value,"from handelSelectChange");
        setCurrentPage(0)
    }
    // console.log(itemsPerPage,"from state");
    useEffect(() => {
        const storedCart = getShoppingCart()
        const ids = Object.keys(storedCart)


        fetch('http://localhost:5000/productsbyids', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ids)

        })
            .then(res => res.json())
            .then(cartProduct => {
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
                    const AddedProduct = cartProduct.find(product => id === product._id)
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
            })


    }, [])

    const handelAddToCart = (product) => {
        //if product doesnt exist in the cart,then set quantity 1
        //if exist ,then set quantity by 1
        let newCart = [];
        const exist = cart.find(pd => pd._id === product._id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]

        }
        else {
            exist.quantity = exist.quantity + 1
            const remainingProduct = cart.filter(pd => pd._id !== product._id)
            newCart = [...remainingProduct, exist]
        }
        // const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product._id)
    }
    const handelClearCart = () => {
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
                                key={product._id}
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

            <div className='text-center mb-5'>
                {
                    pageNumber.map(number => <button className={`btn border-warning  btn-outline  mr-2 ${currentPage === number ? "bg-warning text-black" : ""}`}
                        key={number}

                        onClick={() => setCurrentPage(number)}
                    >
                        {number}</button>)
                }

                <select className='select border-warning' value={itemsPerPage} onChange={handelSelectChange}>
                    {
                        options.map(option => <option key={option} value={option}>{option}</option>)
                    }
                </select>
            </div>


        </>
    );
};

export default Shop;