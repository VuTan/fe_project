
import React from "react";
import "./Footer.scss";
import { BiLogoGmail } from "react-icons/bi";

import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";
const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4>TÌM CỬA HÀNG</h4>
                    <ul>
                    <li><NavLink to="#">Danh Mục Sản Phẩm</NavLink></li>
                    <li><NavLink to="#">Bộ Sưu Tập Mới</NavLink></li>
                    <li><NavLink to="#">Chính Sách Đổi Trả</NavLink></li>
                    <li><NavLink to="#">Địa Chỉ</NavLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>SẢN PHẨM</h4>
                    <ul>
                        <li><NavLink to="#">Thời trang nam</NavLink></li>
                        <li><NavLink to="#">Thời trang nữ</NavLink></li>
                        <li><NavLink to="#">Thời trang Unisex</NavLink></li>
                        <li><NavLink to="#">Thời trang có hạn (Limited)</NavLink></li>
                        <li><NavLink to="#">Chương trình khuyến mãi</NavLink></li>
                        <li><NavLink to="#">Sự kiện cùng người nổi tiếng</NavLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>KÊNH TRUYỀN THÔNG</h4>
                    <ul>
                        <li><NavLink to="#">Youtube</NavLink></li>
                        <li><NavLink to="#">Facebook</NavLink></li>
                        <li><NavLink to="#">Instagram</NavLink></li>
                        <li><NavLink to="#">TikTok</NavLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>YÊU CẦU HỖ TRỢ</h4>
                    <p>Nếu bạn đang có thắc mắc về sản phẩm và cần đến sự hỗ trợ từ đội ngũ tư vấn viên thì hãy để lại
                        thông tin. Để chúng tôi có thể hỗ trợ bạn nhanh nhất có thể</p>
                    <form>
                        <div style={{position: 'relative', width: 'max-content'}}>
                            <input
                                type="email"
                                placeholder="Nhập địa chỉ email"
                            />
                            <button
                                type="submit"
                            >
                                <BiLogoGmail style={{color: 'white'}}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Viet Nam © 2024 - Design By Fe Team 48</p>
                <div className="footer-links">
                    <NavLink to="#">Guides</NavLink>
                    <NavLink to="#">Terms of Sale</NavLink>
                    <NavLink to="#">Terms of Use</NavLink>
                    <NavLink to="#">Nike Privacy Policy</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;