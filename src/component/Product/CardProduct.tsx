import "./CardProduct.scss";
import React, { useState } from "react";
import { Product } from "../../models/Product.modal";
import { useNavigate } from "react-router-dom";
import { FaRegEdit  } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import AddProductPopup from "../Shop/AddProductPopup";

type CardProductProps = {
    sizeCard?: string;
    product: Product;
}

const CardProduct = (props: CardProductProps) => {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false);

    const handleAddProduct = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(!showPopup);
    };

    const handleCard = () => {
        navigate(`product/${props.product.id}`);
    };

    return (
        <div className="card-product" >
            <div className={`card-img-${props.sizeCard}`}>
                <img src={props.product.main_img_src} alt="img" />
                <div className="icons">
                    <FaRegEdit  size={"23px"} className="edit-icon" onClick={handleAddProduct}/>
                    <AiOutlineDelete size={"27px"} className="delete-icon" />
                </div>
            {showPopup && <AddProductPopup show={showPopup} onClose={handleClose} />}
            </div>
            <div className="info" onClick={handleCard}>
                <div className="left">
                    <p className="title">{props.product.Name}</p>
                    <p className="type">{props.product.Type}</p>
                </div>
                <div className="right">
                    <p className="price">{props.product.Price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;
