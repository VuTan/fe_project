import "./CardSlide.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from "react";
import CardProduct from "../Product/CardProduct";

type CardSliderProps = {
    sizeCard?: string;
    slideShow?: number;
}

const CardSlider = (props: CardSliderProps) => {
    const sliderRef = useRef<Slider | null>(null);

    const next = () => {
        sliderRef.current?.slickNext();
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.slideShow,
        slidesToScroll: 1,
    };
    const slides = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="card-slider">
            <div className="top">
                <div className="left">
                    <b>Sản phẩm mới</b>
                </div>
                <div className="right">
                    <p>Đi đến cửa hàng</p>
                    <button onClick={previous}>&lt;</button>
                    <button onClick={next}>&gt;</button>
                </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slider, index) => {
                    return (<></>);
                })}
            </Slider>


        </div>);
}

export default CardSlider;