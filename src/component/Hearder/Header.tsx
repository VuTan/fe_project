import "./Header.scss";
import React, { useState } from 'react';
import { IoBasketballOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const Header = () => {
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

    return (
        <header>
            <div className="top-bar">
                <div className="top-left">
                    <IoBasketballOutline />
                    <span  style={{color:"black"}}>VN |<span style={{color:"gray"}}>ENG</span></span>
                </div>
                <div className="top-right">
                    <span>Cửa hàng </span>
                    <span style={{color:"black"}}>|</span>
                    <span>08am - 22pm</span>
                    <span style={{color:"black"}}>|</span>
                    <span>T2 - CN</span>
                </div>
            </div>
            <nav>
                <div className="logo">
                    <a href="#">2handtropical</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </div>
                <div className={`menu-bar ${menuOpen ? 'open' : ''}`}>
                    <div className="close-btn" onClick={closeMenu}>
                        <IoCloseOutline/>
                    </div>
                    <ul className="menu">
                        <li><a href="#">Trang chủ</a></li>
                        <li><a href="#">Giày nam</a></li>
                        <li><a href="#">Giày nữ</a></li>
                        <li><a href="#">Khuyến mãi</a></li>
                        <li><a href="#">Bộ sưu tập</a></li>
                        <li><a href="#">Tin tức</a></li>
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
                            <a href="#"><IoIosHeartEmpty /></a>
                            <a href="#"><CiShoppingCart /></a>
                            <a className="login" href="#">Đăng nhập</a>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;