import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "./AsNavFor.scss"

const images = [
    {
        src: "#",
        alt: "Nike Air Max 92 SE"
    },
    {
        src: "https://drake.vn/image/catalog/H%C3%ACnh%20content/gia%CC%80y%20Converse%20da%20bo%CC%81ng/giay-converse-da-bong-5.jpg",
        alt: "Nike Air Max 93 SE"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhGGkff8PjxlzO2VuaXactT1W8-pO8PYsVw&s",
        alt: "Nike Air Max 94 SE"
    },
    {
        src: "https://giaycaosmartmen.com/wp-content/uploads/2020/12/cach-chup-giay-dep-5.jpg",
        alt: "Nike Air Max 95 SE"
    },
    {
        src: "https://www.chuphinhsanpham.vn/wp-content/uploads/2021/06/chup-hinh-giay-dincox-shoes-c-photo-studio-6-846x400.jpg",
        alt: "Nike Air Max 96 SE"
    },
    {
        src: "https://minhphusport.com.vn/wp-content/uploads/2019/10/giay-the-thao-nam-525-1.jpg",
        alt: "Nike Air Max 97 SE"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBqlxCglh_UxFLbXMBgHDrP_tn0uGrbZpaA&s",
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
            <div className="left1">
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
                {/*<div className={"css-9ubti4"}>*/}
                {/*    <div className={"css-17xce2z"}></div>*/}
                {/*</div>*/}
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
