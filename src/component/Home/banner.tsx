import React from "react";
import "./banner.scss";
import Button from "../Button/Button";
import Marquee from "react-fast-marquee";

const banner = () => {
    return (<div className="banner-contain">
        <div className="banner-top">
            <span>2handtroical</span>
            <p>Khám phá bộ sưu tập màu hè tại. <span>@instagram.2handtropical</span></p>
        </div>
        <div className="banner">
            <div className="banner-content">
                <p className="brand"> 2handtropical </p>
                <p className="title">CREATE THE UTOPIA</p>
                <p className="content">Cùng 2handtropical kiến tạo nên những điều không tưởng. Mỗi bước chân ta đi
                    đến
                    một vùng đất mới
                    <br/>Đều là những trải nghiệm và những bài học mới để trưởng thành hơn</p>
                <div className="button">
                    <Button title="Đến của hàng" isBlack/>
                    <Button title="Tư vấn" isBlack={false}/>

                </div>
            </div>
        </div>
        <div className="banner-bot">
            <Marquee className="marque" autoFill={true}>
                <div className="li-1">
                    <li>2handtropical</li>
                </div>
                <div className="li-2">
                    <li className="gray">2handtropical</li>
                </div>
            </Marquee>
        </div>
    </div>)
}

export default banner;