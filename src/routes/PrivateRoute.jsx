import React, { useContext } from 'react';
import { AuthenticationContex } from '../provider/AuthContex';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location=useLocation()
    const { user ,loading } = useContext(AuthenticationContex)
    if (loading) {
        return <div className='text-4xl text-red-500 text-center'>Loading.................</div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={"/login"} state={{from:location}} replace>

        </Navigate>
    );
};

export default PrivateRoute;