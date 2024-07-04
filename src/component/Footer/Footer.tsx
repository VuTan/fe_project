
import React from "react";
import "./Footer.scss";
import { BiLogoGmail } from "react-icons/bi";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'
const Footer = () => {
    const { t } = useTranslation('footer')

    return(
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4><a href="#">{t('search')}</a></h4>
                    <ul>
                    <li><a href="#">{t('product_portfolio')}</a></li>
                    <li><a href="#">{t('collection')}</a></li>
                    <li><a href="#">{t('policy')}</a></li>
                    <li><a href="#">{t('old shoes')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t('product')}</h4>
                    <ul>
                        <li><a href="#">{t("men")}</a></li>
                        <li><a href="#">{t("women")}</a></li>
                        <li><a href="#">{t("uni")}</a></li>
                        <li><a href="#">{t("limited")}</a></li>
                        <li><a href="#">{t("promotion")}</a></li>
                        <li><a href="#">{t("event")}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>{t("media")}</h4>
                    <ul>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
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
                <p>Viet Nam © 2024 - Design by team Fe 48</p>
                <div className="footer-links">
                    <a href="#">{t("Guides")}</a>
                    <a href="#">{t("Terms of Sale")}</a>
                    <a href="#"> {t("Terms of Use")}</a>
                    <a href="#">{t("Nike Privacy Policy")}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;