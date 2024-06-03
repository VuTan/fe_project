
import React from "react";
import "./Header.scss";

const header = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="top-left">
                    <span><img src="images/globe-icon.png" alt="Globe Icon"/> VN IENG</span>
                </div>
                <div className="top-right">
                    <span>Cửa hàng</span>
                    <span>08am - 22pm</span>
                    <span>T2 - CN</span>
                    <span><a href="#">Đăng nhập</a></span>
                </div>
            </div>
            <nav>
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
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm"/>
                        <button><img src="images/search-icon.png" alt="Search Icon"/></button>
                </div>
                <div className="icons">
                    <a href="#"><img src="images/heart-icon.png" alt="Heart Icon"/></a>
                    <a href="#"><img src="images/cart-icon.png" alt="Cart Icon"/></a>
                </div>
            </nav>
        </header>
    )
}

export default header;