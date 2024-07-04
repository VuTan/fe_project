import "./Header.scss";
import React, { useState } from 'react';
import { SiNike } from "react-icons/si";
import { IoIosHeartEmpty } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { CiShoppingCart,CiLight } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
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

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
    };

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
                    <span>{t('header-show.shop')} </span>
                    <span>|</span>
                    <span>{t('header-show.time')}</span>
                    <span>|</span>
                    <span>{t('header-show.open')}</span>
                    {/*<span id={"iconn"}><CiLight/></span>*/}
                    <span id="iconn" onClick={toggleDarkMode}>
                        {isDarkMode ? <MdDarkMode/> : <CiLight/>}
                    </span>
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
                        <li><NavLink to="/">{t('header-show.home')}</NavLink></li>
                        <li><NavLink to="#">{t('header-show.men')}</NavLink></li>
                        <li><NavLink to="#">{t('header-show.women')}</NavLink></li>
                        <li><NavLink to="#">{t('header-show.promotion')}</NavLink></li>
                        <li><NavLink to="#">{t('header-show.collection')}</NavLink></li>
                        <li><NavLink to="#">{t('header-show.news')}</NavLink></li>
                    </ul>
                    <div className="search-icons">
                        <div className="search">
                            <input type="text"
                                   placeholder={t('header-show.search')}
                                   value={searchTerm}
                                   onChange={(event) => setSearchTerm(event.target.value)}
                                   onKeyDown={handleKeyDown}/>
                            <button onClick={handleSearch}><FiSearch /></button>
                        </div>
                        <div className="icons">
                            <NavLink to="#"><IoIosHeartEmpty /></NavLink>
                            <NavLink to="/Cart"><CiShoppingCart /></NavLink>
                            <NavLink className="login" to="/Login">{t('header-show.login')}</NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;