import React, {useEffect, useState} from 'react';
import './ProductDetail.scss';
import {useParams} from "react-router-dom";
import {fetchProductById} from "../../service/ProductService";
import {Product} from "../../models/Product.modal";
import AsNavFor from "../Home/AsNavFor";

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        getProduct(id);
    }, []);

    const getProduct = async (id: string | undefined) => {
        let res = await fetchProductById(id);
        if (res && res.data[0]) {
            setProduct(res.data[0]);
        }
    };

    const [showPopup, setShowPopup] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeClick = (size: string) => {
        if (selectedSize === size) {
            setSelectedSize('');
        } else {
            setSelectedSize(size);
        }
    };
    const handleOpenPopup = () => {
        setShowPopup(true);
        document.body.style.overflow = 'hidden';
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = 'auto';
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const popupContent = document.querySelector('.popup-content');
        const closeButton = document.querySelector('.close-button');

        if (event.target !== popupContent && event.target !== closeButton) {
            handleClosePopup();

        }
    }

    return (
        <>
            <div className="show-detail">
                <div className="image-grid">
                    <AsNavFor/>
                </div>
                <div className="details">
                    <h1>{product?.Name}</h1>
                    <p>{product?.Type}</p>
                    <p>{product?.Price}</p>
                    <p>{product?.describe}</p>
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            {product?.size.map((size) => (
                                <button key={size} className="size">EU {size}</button>
                            ))}
                        </div>
                    </div>
                    <button className="add-to-bag">Add to Bag</button>
                    <button className="favourite">Favourite</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
