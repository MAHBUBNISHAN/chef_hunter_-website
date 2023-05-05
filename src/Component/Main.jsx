import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx/Header';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div>
            <div>
            
            </div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;