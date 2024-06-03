
import React from "react";
import "./Header.scss";
import search from "../images/search-icon.png";
import heart from "../images/heart-icon.png";
import cart from "../images/cart-icon.png";
import logoshose from "../images/logoshose.png";

const header = () => {
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
                    <span><a href="#">Đăng nhập</a></span>
                </div>
            </div>
            <nav className="botton-bar">
                <div className="botton-left">
                    <div className="logo">
                        <a href="#">2handtropical</a>
                    </div>
                    <ul className="menu">
                        <li><a href="#">Trang chủ</a></li>
                        <li><a href="#">Giày nam</a></li>
                        <li><a href="#">Giày nữ</a></li>
                        <li><a href="#">Khuyến mãi</a></li>
                        <li><a href="#">Bộ sưu tập</a></li>
                        <li><a href="#">Tin tức</a></li>
                    </ul>
                </div>
                <div className="botton-right">
                    <div className="search">
                        <input type="text" placeholder="Tìm kiếm"/>
                        <button type="submit"><img src={search} alt="search"/></button>
                    </div>
                    <div className="icons">
                        <a href="#"><img src={heart}/></a>
                        <a href="#"><img src={cart}/></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header;