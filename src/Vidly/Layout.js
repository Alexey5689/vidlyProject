import React from "react";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}