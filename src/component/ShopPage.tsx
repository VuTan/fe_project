import React, { useState } from 'react';
import './ShopPage.scss';

const ShopPage: React.FC = () => {
    const products = [
        { id: 1, name: "Nike Air Force 1 Mid '07", price: "₹ 10,795.00", image: "", tag: "Just In" },
        { id: 2, name: "Nike Court Vision Low Next Nature", price: "₹ 4,995.00", image: "", tag: "Just In" },
        { id: 3, name: "Nike Air Force 1 PLT.AF.ORM", price: "₹ 8,695.00", image: "", tag: "Just In" },
        { id: 4, name: "Nike Air Force 1 React", price: "₹ 13,295.00", image: "", tag: "Just In" },
        { id: 5, name: "Air Jordan 1 Elevate Low", price: "₹ 11,895.00", image: "", tag: "Promo Exclusion" },
        { id: 6, name: "Nike Standard Issue", price: "₹ 2,895.00", image: "", tag: "Just In" },
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
                <label><input type="checkbox" /> Nam</label>
                <label><input type="checkbox" /> Nữ</label>
                <label><input type="checkbox" /> Unisex</label>
                <h4>Đặc tính</h4>
                <label><input type="checkbox" /> Sẵn hàng</label>
                <label><input type="checkbox" /> Pre order</label>
                <h4>Khoảng giá</h4>
                <label><input type="checkbox" /> 550.000 - 1.200.000đ</label>
            </div>
            <div className="product-list">
                <div className="filter-sort">
                    <span>Bộ lọc nhanh</span>
                    <span>Xếp theo</span>
                </div>
                <div className="products">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
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
    );
};

export default ShopPage;
