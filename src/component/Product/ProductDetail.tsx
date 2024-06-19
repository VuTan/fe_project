import React from 'react';
import './ProductDetail.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardSlider from '../Home/CardSlider'
import AsNavFor from "../Home/AsNavFor";

const ProductDetail = () => {

    const images = [
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 92 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 93 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 94 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 95 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 96 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 97 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 98 SE" },
        { src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp", alt: "Nike Air Max 99 SE" },
    ];

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
                    <p>MRP: ₹ 16 995.00</p>
                    <p>Incl. of taxes (Also includes all applicable duties)</p>
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            {['UK 6 (EU 40)', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 10.5', 'UK 11', 'UK 11.5', 'UK 12'].map((size) => (
                                <button key={size} className="size">{size}</button>
                            ))}
                        </div>
                    </div>
                    <button className="add-to-bag">Add to Bag</button>
                    <button className="favourite">Favourite</button>
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
