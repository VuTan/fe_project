import React from "react";
import "./ProductDetail.scss";
import {Product} from "../../models/Product.modal";

interface PopupProps {
    product?: Product;
}

const PopupDetailProduct = (props: PopupProps) => {

    return (
        <>
            <h2 className={""}>{props.product?.Name}</h2>
            <p className={""}>{props.product?.Price}</p>
            <p className="describe">{props.product?.describe}</p>
            <p className={""}>Benefit</p>
            <ul className={"list"}>
                {props.product?.benefit.map((benefit) => (
                    <li>{benefit}</li>
                ))}
            </ul>
            <p className={""}>Product details:</p>
        </>
    );
};
export default PopupDetailProduct;