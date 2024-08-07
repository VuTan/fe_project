import "./Header.scss";
import React, {useEffect, useState} from 'react';
import {SiNike} from "react-icons/si";
import {IoIosHeartEmpty} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoCartOutline, IoCloseOutline} from "react-icons/io5";
import {CiLight} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
import {NavLink, useNavigate} from "react-router-dom";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Search from "./Search";
import {logout} from "../../redux/user.reducer";

const Header = () => {
    const {i18n} = useTranslation()
    const {t} = useTranslation('header')
    const [selectedLanguage, setSelectedLanguage] = useState('vi');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const userStorage = useSelector((state: RootState) => state.user);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'vi';
        setSelectedLanguage(savedLanguage as 'vi' | 'en');
        i18n.changeLanguage(savedLanguage);

        const savedTheme = localStorage.getItem('theme') || 'light-mode';
        document.body.classList.add(savedTheme);
        setIsDarkMode(savedTheme === 'dark-mode');
    }, [i18n]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const changeLanguage = (lng: 'vi' | 'en') => {
        setSelectedLanguage(lng)
        i18n.changeLanguage(lng)

        localStorage.setItem('language', lng);
    }

    const toggleDarkMode = () => {
        const newMode = isDarkMode ? 'light-mode' : 'dark-mode';
        setIsDarkMode(!isDarkMode);
        document.body.classList.remove('dark-mode', 'light-mode');
        document.body.classList.add(newMode);
        localStorage.setItem('theme', newMode);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`container-header${showHeader ? "-fix" : ""}`}>
            <div className="top-bar">
                <div className="top-left">
                    <SiNike/>
                    <span
                        className={`language-selector ${selectedLanguage === 'vi' ? 'active' : ''}`}
                        onClick={() => {
                            changeLanguage('vi')
                        }}>VN
                    </span>
                    <span>|</span>
                    <span
                        className={`language-selector ${selectedLanguage === 'en' ? 'active' : ''}`}
                        onClick={() => {
                            changeLanguage('en')
                        }}>ENG
                    </span>

                </div>
                <div className="top-right">
                    <span>{t('header-show.shop')} </span>
                    <span>|</span>
                    <span>{t('header-show.open')}</span>
                    <span>|</span>
                    <span>{t('header-show.time')}</span>
                    <span id="iconn" onClick={toggleDarkMode}>
                        {isDarkMode ? <MdDarkMode/> : <CiLight/>}
                    </span>
                </div>
            </div>
            <nav>
                <div className="logo">
                    <NavLink to="/"><img src="/logo.png" alt="2handtropical"/></NavLink>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <GiHamburgerMenu/>
                </div>
                <div className={`menu-bar ${menuOpen ? 'open' : ''}`}>
                    <div className="close-btn" onClick={closeMenu}>
                        <IoCloseOutline/>
                    </div>
                    <ul className="menu">
                        <li><NavLink to="/">{t('header-show.home')}</NavLink></li>
                        <li><NavLink to="/shop">{t('header-show.men')}</NavLink></li>
                        <li><NavLink to="/news">{t('header-show.news')}</NavLink></li>
                        <li><NavLink to="/contact">{t('header-show.contact')}</NavLink></li>
                    </ul>
                    <div className="search-icons">
                        <Search/>
                        <div className="icons">
                            <NavLink to="/favouriteProduct"><IoIosHeartEmpty size={25}/></NavLink>
                            <NavLink to="/Cart"><IoCartOutline size={25}/></NavLink>
                            {userStorage.user ?
                                (
                                    <p className="accset">{userStorage.user.firstName + ' ' + userStorage.user.lastName}

                                        <div className="dropdown-content">
                                            <NavLink
                                                to={"#"}>Hello {userStorage.user.firstName + ' ' + userStorage.user.lastName}</NavLink>
                                            <NavLink to={"/profile"}>Profile</NavLink>
                                            <NavLink to={"#"} onClick={() => {
                                                dispatch(logout())
                                                navigate('/');
                                            }}>Log Out</NavLink>
                                        </div>

                                    </p>) :
                                (<NavLink className="login" to="/Login">{t('header-show.login')}</NavLink>)}
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;