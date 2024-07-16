import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "./AsNavFor.scss"
import {Product} from "../../models/Product.modal";

type Props = {
    product: Product | undefined;
}

const AsNavFor = (prop: Props) => {
    const [nav1, setNav1] = useState<Slider | undefined>();
    const [nav2, setNav2] = useState<Slider | undefined>();
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);
    const product = prop.product

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
            sliderRef1.current.slickGoTo(0)
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
                    {product && product.img_src?.map((img) => {
                        return (<img src={img} alt=""/>);
                    })}
                </Slider>
            </div>
            {/*<div className={"css-9ubti4"}>*/}
            {/*    <div className={"css-17xce2z"}></div>*/}
            {/*</div>*/}
            <div className="right">
                <Slider asNavFor={nav2} ref={sliderRef1} arrows={false} vertical={true} slidesPerRow={1}>
                    {product && product.img_src?.map((img, index) => {
                        return (<img className={"main-img-slider"} src={img} alt=""/>);
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default AsNavFor;
