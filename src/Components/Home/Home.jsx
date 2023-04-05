import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>

            {/* <h1>This is home</h1> */}

        </>
    );
};

export default Home;