import "./CardProduct.scss"
import React from "react";

const CardProduct = () => {
    return (<div className="card-product">
        <div className="card-img"></div>
        <div className="info">
            <div className="left">
                <p className=" title">Nike Air Max Pulse</p>
                <p className=" type">Nike</p>
            </div>
            <div className="right">
                <p className=" price">1.200.000</p>
            </div>
        </div>
    </div>)
}

export default CardProduct;