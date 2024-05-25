
import React from "react";
import "./Footer.scss";

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4>TÌM CỬA HÀNG</h4>
                    <h4>DANH MỤC SẢN PHẨM</h4>
                    <h4>BỘ SƯU TẬP MỚI</h4>
                    <h4>CHÍNH SÁCH ĐỔI TRẢ</h4>
                    <h4>THU GOM GIÀY CŨ</h4>
                </div>
                <div className="footer-column">
                    <h4>SẢN PHẨM</h4>
                    <ul>
                        <li>Thời trang nam</li>
                        <li>Thời trang nữ</li>
                        <li>Thời trang Unisex</li>
                        <li>Thời trang có hạn (Limited)</li>
                        <li>Chương trình khuyến mãi</li>
                        <li>Sự kiện cùng người nổi tiếng</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>KÊNH TRUYỀN THÔNG</h4>
                    <ul>
                        <li>Youtube</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>TikTok</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>YÊU CẦU HỖ TRỢ</h4>
                    <p>Nếu bạn đang có thắc mắc về sản phẩm và cần đến sự hỗ trợ từ đội ngũ tư vấn viên thì hãy để lại
                        thông tin. Để chúng tôi có thể hỗ trợ bạn nhanh nhất có thể</p>
                    <form>
                        <input type="email" placeholder="Nhập địa chỉ email"/>
                        <button type="submit"><img src="images/submit-icon.png" alt="Submit Icon"/></button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Viet Nam © 2024 - Design by ConDit.Design</p>
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