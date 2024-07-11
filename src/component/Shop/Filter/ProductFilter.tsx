import React from "react";
import "../Filter/ProductFilter.scss"
interface Filter {

}

const ProductFilter = (filter?: Filter) => {
    return (<div className="sidebar">
        <h3>Sản phẩm hiện có ()</h3>
        <h4>Loại</h4>
        <div className="category-buttons">
            <span>Nam</span>
            <span>Nam</span>
            <span>Nam</span>
            <span>Nam</span>
            <span>Nam</span>
            <span>Nam</span>
        </div>
        <h4>Giới tính</h4>
        <label><input type="checkbox"/> Nam</label>
        <label><input type="checkbox"/> Nữ</label>
        <h4>Đặc tính</h4>
        <label><input type="checkbox"/> Sẵn hàng</label>
        <label><input type="checkbox"/> Pre order</label>
        <h4>Khoảng giá</h4>
        <label><input type="checkbox"/> 550.000 - 1.200.000đ</label>
    </div>)
}

export default ProductFilter;

const FilterTest = () => {

}