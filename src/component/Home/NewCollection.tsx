import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCollection.scss';
import Button from "../Button/Button";
import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'
const NewCollection: React.FC = () => {

    const navigate = useNavigate();

    const { t } = useTranslation('collectionvideo')


    return (
        <div className="new-collection-section">
            <h2 className="section-title">{t("collection-show.section-title")}</h2>
            <div className="images">
                <img src={require('../images/image1.png')} alt="Create the Future 1" className="collection-image"/>
                <img src={require('../images/image2.png')} alt="Create the Future 2" className="collection-image"/>
            </div>
            <div className="explore">
                <h2>{t("collection-show.explore-name")}</h2>
                <p>{t("collection-show.p")}</p>
                <NavLink to="/shop"><Button title= {t("text-section.store")} isBlack/></NavLink>

            </div>

            <h2 className="section-title">{t("collection-show.title")}</h2>
            <div className="product-categories">
                <div className="category">
                    <img src={require('./im1.png')} alt="Nam" className="category-image"/>
                    <button className="category-button">{t("collection-show.category1")}</button>
                </div>
                <div className="category">
                    <img src={require('./im2.png')} alt="Thời Trang Nữ" className="category-image"/>
                    <button className="category-button">{t("collection-show.category2")}</button>
                </div>
                <div className="category">
                    <img src={require('./im3.png')} alt="Unisex" className="category-image"/>
                    <button className="category-button">{t("collection-show.category3")}</button>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;