import React,{useState, useRef, useEffect} from 'react';
import './ProductDetail.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardSlider from '../Home/CardSlider'
import AsNavFor from "../Home/AsNavFor";
import Popup from "../Product/PopupDetailProduct"

const ProductDetail = () => {

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
        window.scrollTo({ top: 0, behavior: 'smooth' })
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

    return (
        <>
            <Header/>
            <div className="show-detail">
                <div className="image-grid">
                    <AsNavFor/>
                </div>
                <div className="details">
                    <h1>Nike Air Max 97 SE</h1>
                    <p>Men's Shoes</p>
                    <p>MRP: $ 16.995.00</p>
                    <p>Incl. of taxes (Also includes all applicable duties)</p>
                    <button className="details-show" onClick={handleOpenPopup}>More Detail</button>
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            {['UK 6 (EU 40)', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 10.5', 'UK 11', 'UK 11.5', 'UK 12'].map((size) => (
                                <button
                                    key={size}
                                    className={`size ${selectedSize === size ? 'size-hold' : ''}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="add-to-bag">Add to Bag</button>
                    <button className="favourite">Favourite</button>
                    {showPopup && (
                        <>
                            <div className="popup-overlay" onClick={handleOverlayClick} ></div>
                                <div className="popup">
                                    <div className="popup-content">
                                        <button className="close-button" onClick={handleClosePopup}>&times;</button>
                                        <Popup/>
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
            <Footer/>
        </>
    )
}

export default ProductDetail;
