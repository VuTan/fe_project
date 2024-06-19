import React from "react";
import "./CardSlide.scss";
import CardSlider from "./CardSlider";

const SliderNew = () => {
    return (<div style={{height: "550px", padding: "15px 0px 15px 48px", marginBottom: "45px"}}>
        <CardSlider sizeCard={"large"} slideShow={3}></CardSlider>
    </div>);
}

export default SliderNew;