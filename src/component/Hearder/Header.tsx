import "./Header.scss";
import search from "../images/search-icon.png";
import heart from "../images/heart-icon.png";
import cart from "../images/cart-icon.png";
import logoshose from "../images/logoshose.png";
import hamburger from "../images/hamburger.png";
import closeIcon from "../images/close-icon.png";
import React, { useState } from 'react';

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
                    <span><img src={logoshose} alt="Globe Icon"/> VN | ENG</span>
                </div>
                <div className="top-right">
                    <span>Cửa hàng</span>
                    <span>08am - 22pm</span>
                    <span>T2 - CN</span>
                </div>
            </div>
            <nav>
                <div className="logo">
                    <a href="#">2handtropical</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <img src={hamburger} alt="Menu"/>
                </div>
                <div className={`menu-bar ${menuOpen ? 'open' : ''}`}>
                    <div className="close-btn" onClick={closeMenu}>
                        <img src={closeIcon} alt="Close"/>
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
                            {/*<button onClick={handleSearch}>Search</button>*/}
                        </div>
                        <div className="icons">
                            <a href="#"><img src={heart} alt=""/></a>
                            <a href="#"><img src={cart} alt=""/></a>
                            <a className="login" href="#">Đăng nhập</a>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;