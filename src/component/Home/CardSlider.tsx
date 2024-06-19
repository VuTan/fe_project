import "./CardSlide.scss";
import CardProduct from "./CardProduct";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from "react";

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
                <div className="row">
                    <div className="col-6 left">
                        <p>Sản phẩm mới</p>
                    </div>
                    <div className="col-6 right">
                        <p>Đi đến cửa hàng</p>
                        <button onClick={previous}>&lt;</button>
                        <button onClick={next}>&gt;</button>
                    </div>
                </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slider, index) => {
                    return (<CardProduct sizeCard={props.sizeCard}></CardProduct>);
                })}
            </Slider>


        </div>);
}

export default CardSlider;