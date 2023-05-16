import React, { useContext } from 'react';
import logo from "../../../public/Logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { AuthenticationContex } from '../../provider/AuthContex';


const Header = () => {
    const { user, logOutUser } = useContext(AuthenticationContex)
    const handelLogout = () => {
        logOutUser()
    }
    return (
        <>
            <div className="navbar bg-[#1C2B35] ">
                <div className='w-[80%] mx-auto '>
                    <div className="md:flex-1">
                        <img src={logo} alt="" className='mr-28' />
                    </div>
                    <div className="md:flex-none flex-wrap">
                        <ul className="md:menu md:menu-horizontal px-1 text-white">
                            <li><Link to="/">Order</Link></li>
                            <li><Link to="/review">Order Review</Link></li>
                            <li><Link to="/manageinventory">Manage Inventory</Link></li>
                            <li>{user ? <Link onClick={handelLogout} className="">Logout</Link> : <Link to="/login">Login</Link>}</li>
                            {
                                user && <li><p>{user.email}</p></li>

                            }
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;