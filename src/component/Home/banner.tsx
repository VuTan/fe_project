import React from "react";
import "./banner.scss";
import Button from "../Button/Button";
import Marquee from "react-fast-marquee";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'
const Banner = () => {
    const { t } = useTranslation('banner')

    return <div className="banner-contain">
        <div className="banner-top">
            <span>2handtroical</span>
            <p>{t('ex')} <span> @instagram.2handtropical</span></p>
        </div>
        <div className="banner">
            <div className="banner-content">
                <p className="brand"> 2handtropical </p>
                <p className="title">{t("ex1")}</p>
                <p className="content">{t("content")}
                    <br/>{t("content2")}</p>
                <div className="button">
                    <Button title={t("store")} isBlack/>
                    <Button title={t("advise")} isBlack={false}/>

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
    </div>
}

export default Banner;