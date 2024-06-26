import "./Header.scss";
import React, { useState } from 'react';
import { SiNike } from "react-icons/si";
import { IoIosHeartEmpty } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'

const Header = () => {
    const { i18n } = useTranslation()
    const { t } = useTranslation('header')
    const [selectedLanguage, setSelectedLanguage] = useState('vi');
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleSearch = () => {
        // hien thi phan tim kiem co hoat dong hay khong
        console.log('Search term:', searchTerm);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const changeLanguage = (lng: 'vi'|'en') => {
        setSelectedLanguage(lng)
        i18n.changeLanguage(lng)
    }

    return (
        <header>
            <div className="top-bar">
                <div className="top-left">
                    <SiNike />
                    <span
                        className={`language-selector ${selectedLanguage === 'vi' ? 'active' : ''}`}
                        onClick={()=>{changeLanguage('vi')}}>VN
                    </span>
                    <span>|</span>
                    <span
                        className={`language-selector ${selectedLanguage === 'en' ? 'active' : ''}`}
                        onClick={()=>{changeLanguage('en')}}>ENG
                    </span>

                </div>
                <div className="top-right">
                    <span>{t('shop')} </span>
                    <span style={{color:"black"}}>|</span>
                    <span>08am - 22pm</span>
                    <span style={{color:"black"}}>|</span>
                    <span>T2 - CN</span>
                </div>
            </div>
            <nav>
                <div className="logo">
                    <NavLink to="/">2handtropical</NavLink>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </div>
                <div className={`menu-bar ${menuOpen ? 'open' : ''}`}>
                    <div className="close-btn" onClick={closeMenu}>
                        <IoCloseOutline/>
                    </div>
                    <ul className="menu">
                        <li><NavLink to="/">Trang chủ</NavLink></li>
                        <li><NavLink to="#">Giày nam</NavLink></li>
                        <li><NavLink to="#">Giày nữ</NavLink></li>
                        <li><NavLink to="#">Khuyến mãi</NavLink></li>
                        <li><NavLink to="#">Bộ sưu tập</NavLink></li>
                        <li><NavLink to="#">Tin tức</NavLink></li>
                    </ul>
                    <div className="search-icons">
                        <div className="search">
                            <input type="text"
                                   placeholder="Search..."
                                   value={searchTerm}
                                   onChange={(event) => setSearchTerm(event.target.value)}
                                   onKeyDown={handleKeyDown}/>
                            <button onClick={handleSearch}><FiSearch /></button>
                        </div>
                        <div className="icons">
                            <NavLink to="#"><IoIosHeartEmpty /></NavLink>
                            <NavLink to="/Cart"><CiShoppingCart /></NavLink>
                            <button><NavLink className="login" to="/Login">Đăng nhập</NavLink></button>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;