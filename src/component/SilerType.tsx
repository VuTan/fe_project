import React from "react";
import "./SliderType.scss"
import CardSlider from "./CardSlider";

const SilerType = () => {
    return (
        <div className="slider2-contain">
            <div className="left">
                <CardSlider></CardSlider>
            </div>
            <div className="right">
                <CardSlider></CardSlider>
            </div>
        </div>);
}

export default SilerType;