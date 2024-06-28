import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCollection.scss';
import Button from "../Button/Button";
import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";

const NewCollection: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="new-collection-section">
            <h2 className="section-title">Bộ sưu tập mới</h2>
            <div className="images">
                <img src={require('../images/image1.png')} alt="Create the Future 1" className="collection-image"/>
                <img src={require('../images/image2.png')} alt="Create the Future 2" className="collection-image"/>
            </div>
            <div className="explore">
                <h2>KHÁM PHÁ THÊM</h2>
                <p>Khám phá thêm những sản phẩm chất lượng mà 2handtropical đang cung cấp</p>
                <NavLink to="/shop"><Button title={"Đến cửa hàng"} isBlack/></NavLink>

            </div>

            <h2 className="section-title">Danh mục sản phẩm</h2>
            <div className="product-categories">
                <div className="category">
                    <img src={require('./im1.png')} alt="Nam" className="category-image"/>
                    <button className="category-button">Nam</button>
                </div>
                <div className="category">
                    <img src={require('./im2.png')} alt="Thời Trang Nữ" className="category-image"/>
                    <button className="category-button">Thời Trang Nữ</button>
                </div>
                <div className="category">
                    <img src={require('./im3.png')} alt="Unisex" className="category-image"/>
                    <button className="category-button">Unisex</button>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;