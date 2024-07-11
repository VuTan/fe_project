import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";

const MainLayout = () => {
    const [scrollUp, setScrollUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollUpHandle = () => {
        window.scrollTo(0 , 0);
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 0) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (<>
        <Header/>
        <div className="banner-contain"><Outlet/></div>
        <Footer/>;
        <div className={"scroll-up__container"} style={{display:scrollUp? "block":"none"}}>
            <button className={"scroll-up__btn"} onClick={scrollUpHandle}>
                <i className={"fas fa-arrow-up"}></i>
            </button>
        </div>
    </>);
}

export default MainLayout;