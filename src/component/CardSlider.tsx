import React from "react";
import "./CardSlide.scss";
import CardProduct from "./CardProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactCardSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const slides = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="card-slider">
            <div className="top">
                <div className="row">
                    <div className="col-6 left">
                        <p>Sản phẩm mới</p>
                    </div>
                    <div className="col-6 right">
                        <p>Đi đến cửa hàng</p>
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>

            <div id="sliders" className="content">
                <Slider {...settings}>
                    {slides.map((slider, index) => {
                        return (<CardProduct/>);
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default ReactCardSlider;