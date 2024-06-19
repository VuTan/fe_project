import React from "react";
import "./SliderType.scss"
import CardSlider from "./CardSlider";

const SliderType = () => {
    return (
        <div className="slider2-contain">
            <div className="left">
                <CardSlider sizeCard={"medium"} slideShow={3}></CardSlider>
            </div>
            <div className="right">
                <CardSlider sizeCard={"medium"} slideShow={3}></CardSlider>
            </div>
        </div>);
}

export default SliderType;