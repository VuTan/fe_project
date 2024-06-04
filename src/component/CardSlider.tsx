import React from "react";
import "./CardSlide.scss";

const ReactCardSlider = () => {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8]
    const sliderLeft = () => {
        var slider = document.getElementById("sliders");
        // @ts-ignore
        slider.scrollLeft = slider.scrollLeft - 420;
    };
    let sliderRight = () => {
        var slider = document.getElementById("sliders");
        // @ts-ignore
        slider.scrollLeft = slider.scrollLeft + 420;
    }
    return (
        <div className="card-slider">
            <div className="top">
                <div className="row">
                    <div className="col-6 left">
                        <p>Sản phẩm mới</p>
                    </div>
                    <div className="col-6 right">
                        <p>Đi đến cửa hàng</p>
                        <button onClick={sliderLeft}>&lt;</button>
                        <button onClick={sliderRight}>&gt;</button>
                    </div>
                </div>
            </div>
            <div id="sliders" className="content">
                {slides.map((slide, index) => {
                    return (<div className="slider-card">
                        <div className="card-img"></div>
                        <div className="info">
                            <div className="left">
                                <p className=" title">Nike Air Max Pulse</p>
                                <p className=" type">Nike</p>
                            </div>
                            <div className="right">
                                <p className=" price">1.200.000</p>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
        </div>
    );
}

export default ReactCardSlider;