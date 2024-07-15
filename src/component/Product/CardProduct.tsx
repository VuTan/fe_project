import "./CardProduct.scss"
import React from "react";
import {formatPriceVND, Product} from "../../models/Product.modal";
import {useNavigate} from "react-router-dom";


type CardProductProps = {
    sizeCard?: string;
    product: Product;
}
const CardProduct = (props: CardProductProps) => {
    const navigate = useNavigate()
    return (<div className="card-product" onClick={() => navigate(`product/${props.product.id}`)}>
        <div className={`card-img-${props.sizeCard}`}>
            <img src={props.product.main_img_src} alt="img"/>
        </div>
        <div className="info">
            <div className="left">
                <p className=" title">{props.product.Name}</p>
                <p className=" type">{props.product.Type}</p>
            </div>
            <div className="right">
                <p className=" price">{formatPriceVND(props.product.Price)}</p>
            </div>
        </div>
    </div>)
}

export default CardProduct;