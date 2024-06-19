import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "./AsNavFor.scss"

const images = [
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 92 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 93 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 94 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 95 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 96 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 97 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 98 SE"
    },
    {
        src: "https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp",
        alt: "Nike Air Max 99 SE"
    },
];

const AsNavFor = () => {
    const [nav1, setNav1] = useState<Slider | undefined>();
    const [nav2, setNav2] = useState<Slider | undefined>();
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
        }
    }, []);

    return (
        <div className="slider-container">
            <div className="left">
                <Slider
                    asNavFor={nav1}
                    ref={sliderRef2}
                    slidesToShow={4}
                    vertical={true}
                    focusOnSelect={true}
                    arrows={false}
                >
                    {images.map((img, index) => {
                        return (<img src={img.src} alt=""/>);
                    })}
                </Slider>
            </div>
            <div className="right">
                <Slider asNavFor={nav2} ref={sliderRef1} arrows={false} vertical={true}>
                    {images.map((img, index) => {
                        return (<img src={img.src} alt=""/>);
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default AsNavFor;
