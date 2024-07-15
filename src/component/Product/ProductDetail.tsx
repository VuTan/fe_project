import React, {useEffect, useState} from 'react';
import './ProductDetail.scss';
import {useNavigate, useParams} from "react-router-dom";
import {createBuyProduct} from "../../models/Product.modal";
import AsNavFor from "../Home/AsNavFor";
import CardSlider from '../Home/CardSlider'
import Popup from "../Product/PopupDetailProduct"

import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/cart.reducers";
import {addFavorite, removeFavorite} from "../../redux/favorite.reducers";
import {RootState} from "../../redux/store";
import {toast} from "react-toastify";
import {useGetProductByIdQuery} from "../../service/ProductService";


const ProductDetail = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [selectedSize, setSelectedSize] = useState<number>();
    const navigate = useNavigate();

    const [isFavorite, setIsFavorite] = useState(false);
    const favorite = useSelector((state: RootState) => state.favorite)

    const {id} = useParams()

    const {data} = useGetProductByIdQuery({id: id})

    useEffect(() => {
        window.scrollTo(0, 0)

        const isFavorite = favorite.favArr.some(product => product.id == id);
        console.log(isFavorite)
        setIsFavorite(isFavorite);
    }, []);

    const handleSizeClick = (size: number) => {
        if (selectedSize !== size)
            setSelectedSize(size);

    }


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
        if (selectedSize) {
            if (data)
                dispath(addProduct(createBuyProduct(data, selectedSize, 1)))
        } else {
            toast.error(`Please select size`, {
                position: "bottom-left"
            });
        }

    }
    const handleAddToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (data)
            dispath(addFavorite(data))
        setIsFavorite(true)
    }
    const handleRemoveFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (data)
            dispath(removeFavorite(data))
        setIsFavorite(false)
    }

    useEffect(() => {
        const onPopState = () => {
            if (showPopup) {
            }
        };

        return () => {
            if (showPopup) {
                navigate(`/shop/product/${id}`);
                handleOpenPopup();
                window.addEventListener('popstate', onPopState);
            } else {
                handleClosePopup();
                window.removeEventListener('popstate', onPopState);
            }
        }
    }, []);

    return (
        <>
            <div className="show-detail">
                <div className="image-grid">
                    <AsNavFor product={data}/>
                </div>
                <div className="details">
                    <h1>{data?.Name}</h1>
                    <p>{data?.Type}</p>
                    <p>{data?.Price}</p>
                    <p>{data?.describe}</p>
                    <h6 className="details-show" onClick={handleOpenPopup}>More Detail</h6>
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            {data?.size.map((size) => (
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
                    {isFavorite ? (
                        <button className="favourite"
                                onClick={handleRemoveFavorite}>Favourited
                        </button>) : (
                        <button className="no-favourite"
                                onClick={handleAddToFavorite}>Add to favorite
                        </button>)}
                    {showPopup && (
                        <>
                            <div className="popup-overlay" onClick={handleOverlayClick}>
                                <div onClick={(e) => {
                                    e.stopPropagation()
                                }} className="popup">
                                    <div className="popup-content">
                                        <p className="close-button" onClick={handleClosePopup}>&times;</p>
                                        <Popup product={data}/>
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