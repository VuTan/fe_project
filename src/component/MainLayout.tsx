import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import React from "react";

const MainLayout = () => {
    return (<>
        <Header/>
        <div className="banner-contain"><Outlet/></div>
        <Footer/>
    </>);
}

export default MainLayout;