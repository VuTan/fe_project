
import React, { useState, useEffect }from "react";
import "./Footer.scss";
import { BiLogoGmail } from "react-icons/bi";

import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'
const Footer = () => {
    const { i18n } = useTranslation()
    const { t } = useTranslation('footer')
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'vi';
        i18n.changeLanguage(savedLanguage);
    }, [i18n]);
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4>{t('search')}</h4>
                    <ul>
                    <li><NavLink to="/shop">{t('product_portfolio')}</NavLink></li>
                    <li><NavLink to="#">{t('collection')}</NavLink></li>
                    <li><NavLink to="#">{t('policy')}</NavLink></li>
                    <li><NavLink to="/news">{t('old shoes')}</NavLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('product')}</h4>
                    <ul>
                        <li><NavLink to="#">{t("men")}</NavLink></li>
                        <li><NavLink to="#">{t("women")}</NavLink></li>
                        <li><NavLink to="#">{t("uni")}</NavLink></li>
                        <li><NavLink to="#">{t("limited")}</NavLink></li>
                        <li><NavLink to="#">{t("promotion")}</NavLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t("media")}</h4>
                    <ul>
                        <li><NavLink to="https://www.youtube.com/">Youtube</NavLink></li>
                        <li><NavLink to="https://www.facebook.com/">Facebook</NavLink></li>
                        <li><NavLink to="https://www.instagram.com/">Instagram</NavLink></li>
                        <li><NavLink to="https://www.tiktok.com/">TikTok</NavLink></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t("supported")}</h4>
                    <p>{t("request")}</p>
                    <form>
                        <div style={{position: 'relative', width: 'max-content'}}>
                            <input
                                type="email"
                                placeholder={t("email")}
                            />
                            <button
                                type="submit"
                            >
                                <BiLogoGmail style={{color: 'white'}}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Viet Nam © 2024 - Design By Fe Team 48</p>
                <div className="footer-links">
                    <NavLink to="#">{t("Guides")}</NavLink>
                    <NavLink to="#">{t("Terms of Sale")}</NavLink>
                    <NavLink to="#"> {t("Terms of Use")}</NavLink>
                    <NavLink to="#">{t("Nike Privacy Policy")}</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;