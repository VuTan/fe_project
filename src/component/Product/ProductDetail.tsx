import React, {useEffect, useState} from 'react';
import './ProductDetail.scss';
import {useParams, useNavigate } from "react-router-dom";
import {fetchProductById} from "../../service/ProductService";
import {createBuyProduct, Product} from "../../models/Product.modal";
import AsNavFor from "../Home/AsNavFor";
import CardSlider from '../Home/CardSlider'
import Popup from "../Product/PopupDetailProduct"
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/cart.reducers";

const ProductDetail = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedSize, setSelectedSize] = useState<number>();
    const navigate = useNavigate();
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

    const handleSizeClick = (size: number) => {
        if (selectedSize !== size)
            setSelectedSize(size);

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
    };



    const dispath = useDispatch()
    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {

        if (product && selectedSize)
            dispath(addProduct(createBuyProduct(product, selectedSize, 1)))
    }

    useEffect(() => {
        const onPopState = () => {
            if (showPopup) {
                // setShowPopup(false);
                // window.history.replaceState({}, document.title, window.location.pathname);
            }
        };

        return () =>{
            if (showPopup){
                navigate(`/shop/product/${id}`);
                handleOpenPopup();
                window.addEventListener('popstate', onPopState);
            }else{
                handleClosePopup();
                window.removeEventListener('popstate', onPopState);
            }
        }
    }, []);

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
                    <button className="details-show" onClick={handleOpenPopup}>More Detail</button>
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            {product?.size.map((size) => (
                                <button
                                    key={size}
                                    className={`size ${selectedSize === size ? 'size-hold' : ''}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    EU {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="add-to-bag" onClick={handleAddToCart}>Add to Bag</button>
                    <button className="favourite">Favourite</button>
                    {showPopup && (
                        <>
                            <div className="popup-overlay" onClick={handleOverlayClick}>
                            <div onClick={(e) => {e.stopPropagation()}} className="popup">
                                <div className="popup-content">
                                    <p className="close-button" onClick={handleClosePopup}>&times;</p>
                                    <Popup product={product}/>
                                </div>
                            </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <h3 className={"name-style"}>Explore the Nike Air Max 97 SE Men's Shoes</h3>
            <div className="frame">
                <img src={"https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp"}
                     alt="Nike Air Max 97 SE worn"/>
            </div>
            <h3 className={"name-style"}>Originally designed for performance running, the full-length Max Air unit adds
                soft cushioning.</h3>
            <div className="frame">
                <img src={"https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp"}
                     alt="Nike Air Max 97 SE worn"/>
            </div>
            <h3 className={"name-style"}>The suede and synthetic leather upper with mesh underlays adds breathability
                and durability.</h3>
            <div className="frame">
                <img src={"https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp"}
                     alt="Nike Air Max 97 SE worn"/>
            </div>
            <h3 className={"name-style"}>Hidden lacing system was a first of its kind and delivers a streamlined
                look.</h3>
            <CardSlider sizeCard={"large"} slideShow={3}></CardSlider>
        </>
    )
}

export default ProductDetail;
