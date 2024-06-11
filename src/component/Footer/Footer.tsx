
import React from "react";
import "./Footer.scss";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4><a href="#">TÌM CỬA HÀNG</a></h4>
                    <ul>
                    <li><a href="#">Danh Mục Sản Phẩm</a></li>
                    <li><a href="#">Bộ Sưu Tập Mới</a></li>
                    <li><a href="#">Chính Sách Đổi Trả</a></li>
                    <li><a href="#">Thu Gom giày Cũ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>SẢN PHẨM</h4>
                    <ul>
                        <li><a href="#">Thời trang nam</a></li>
                        <li><a href="#">Thời trang nữ</a></li>
                        <li><a href="#">Thời trang Unisex</a></li>
                        <li><a href="#">Thời trang có hạn (Limited)</a></li>
                        <li><a href="#">Chương trình khuyến mãi</a></li>
                        <li><a href="#">Sự kiện cùng người nổi tiếng</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>KÊNH TRUYỀN THÔNG</h4>
                    <ul>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
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
                <p>Viet Nam © 2024 - Design by team Fe 48</p>
                <div className="footer-links">
                    <a href="#">Guides</a>
                    <a href="#">Terms of Sale</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Nike Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;