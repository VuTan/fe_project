import "./CardProduct.scss"
import React from "react";

type CardProductProps = {
    sizeCard?: string;
}
const CardProduct = (props: CardProductProps) => {

    return (<div className="card-product">
        <div className={`card-img-${props.sizeCard}`}>
            <img src={require("../images/Image.png")} alt="img"/>
        </div>
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