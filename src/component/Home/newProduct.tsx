import React from "react";
import "./newProduct.scss"

const newProduct = () => {
    return (<div className="container">
        <div className="row">
            <div className="col-6 left">
                <p>Sản phẩm mới</p>
            </div>
            <div className="col-6 right">
                <p>Đi đến cửa hàng</p>
                <a className="button">&lt;</a>
                <a className="button">&gt;</a>
            </div>
        </div>
        <div className="product">

        </div>
        <div className="card-slider">
            <div className="slide-content">
                <div className="card">
                    <img src="banner.png"/>
                </div>
            </div>
        </div>
    </div>);
}

export default newProduct;
