import React, { useState } from 'react';
import './ShopPage.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const ShopPage: React.FC = () => {
    const products = [
        { id: 1, name: "Nike Air Force 1 Mid '07", price: "₹ 10,795.00", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d6c5f9e-06be-478b-a26a-0f389579253f/ja-1-ep-basketball-shoes-XncH16.png", tag: "Just In" },
        { id: 2, name: "Nike Court Vision Low Next Nature", price: "₹ 4,995.00", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aeb0e25f-a6c0-4d9c-b1bf-409ef9586e1a/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png", tag: "Just In" },
        { id: 3, name: "Nike Air Force 1 PLT.AF.ORM", price: "₹ 8,695.00", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/19215bdf-dc17-406e-9b68-1a038a0a1b79/ja-1-ep-basketball-shoes-XncH16.png", tag: "Just In" },
        { id: 4, name: "Nike Air Force 1 React", price: "₹ 13,295.00", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/150fafa5-6dea-43e1-ae4f-7f523128ccb9/dunk-low-shoes-bJ5Qff.png", tag: "Just In" },
        { id: 5, name: "Air Jordan 1 Elevate Low", price: "₹ 11,895.00", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28b0aa99-e4f1-4f89-8179-017cffe0c780/dunk-low-twist-shoes-V6NqFG.png", tag: "Promo Exclusion" },
        { id: 6, name: "Nike Standard Issue", price: "₹ 2,895.00", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c09cf8bc-4d6c-4564-86d6-cc172deab92e/dunk-low-shoes-r8QXCd.png", tag: "Just In" },
    ];

    const categories = [
        "Shoes",
        "Sports Bras",
        "Tops & T-Shirts",
        "Hoodies & Sweatshirts",
        "Jackets",
        "Trousers & Tights",
        "Shorts",
        "Tracksuits",
        "Jumpsuits & Rompers",
        "Skirts & Dresses",
        "Socks",
        "Accessories & Equipment"
    ];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Header/>
            <div className="shop-page">
                <div className="sidebar">
                    <h3>Sản phẩm hiện có (500)</h3>
                    <div className="category-buttons">
                        {categories.map((category, index) => (
                            <span
                                key={index}
                                className={`category-item ${selectedCategory === category ? 'selected' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                            {category}
                        </span>
                        ))}
                    </div>
                    <h4>Giới tính</h4>
                    <label><input type="checkbox"/> Nam</label>
                    <label><input type="checkbox"/> Nữ</label>
                    <label><input type="checkbox"/> Unisex</label>
                    <h4>Đặc tính</h4>
                    <label><input type="checkbox"/> Sẵn hàng</label>
                    <label><input type="checkbox"/> Pre order</label>
                    <h4>Khoảng giá</h4>
                    <label><input type="checkbox"/> 550.000 - 1.200.000đ</label>
                </div>
                <div className="product-list">
                    <div className="filter-sort">
                        <span>Bộ lọc nhanh</span>
                        <span>Xếp theo</span>
                    </div>
                    <div className="products">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name}/>
                                <div className="product-info">
                                    <span className="tag">{product.tag}</span>
                                    <h2>{product.name}</h2>
                                    <p>Men's Shoes</p>
                                    <p>1 Colour</p>
                                    <p className="price">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ShopPage;
