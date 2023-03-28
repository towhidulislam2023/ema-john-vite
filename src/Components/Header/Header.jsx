import React from 'react';
import logo from "../../../public/Logo.svg"


const Header = () => {
    return (
        <>
            <div className="navbar bg-[#1C2B35] ">
                <div className='w-[80%] mx-auto'>
                    <div className="flex-1">
                        <img src={logo}alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li><a>Order</a></li>
                            <li><a>Order Review</a></li>
                            <li><a>Manage Inventory</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;