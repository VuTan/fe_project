import React, {useState} from 'react';
import './Login.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useTranslation('sigin')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <div className="align-Login">
                <div className="login-container">
                    <h2 className={"name-login"}>2handtropical</h2>
                    <h3 className={"name-login"}>{t('sign-in.login')}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder={t('sign-in.email')}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder={t('sign-in.pass')}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox"/> {t('sign-in.remember')}
                            </label>
                            <NavLink to="#" className="forgot-password">{t('sign-in.forgot')}</NavLink>
                        </div>
                        <p className={"note"}>{t('sign-in.t1')} <NavLink to={"#"} className={"user-policy"}> {t('sign-in.li')}</NavLink></p>
                        <button type="submit" className="login-button">{t('sign-in.submit')}</button>
                        <p className={"note"}>
                            {t('sign-in.no account')} <NavLink to="/SigUp" className="Sigup">2handmembers.</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
