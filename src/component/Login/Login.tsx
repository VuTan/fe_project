import React, {useEffect, useState} from 'react';
import './Login.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useGetUserQuery} from "../../service/UserService";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../redux/user.reducer";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const {t} = useTranslation('sigin')
    const dispath = useDispatch()
    const navigate =  useNavigate();
    const {data} = useGetUserQuery("admin@123")

    useEffect(() => {
        let result: boolean = true;
        if (email === "" || email === null) {
            result = false;
        }
        if (password === "" || password === null) {
            result = false;
        }
        setShowLogin(result)
    }, [email, password]);


    const checkLogin = (email: string, password: string) => {
        if (data === undefined) {
            toast.warning("Email không tồn tại", {position: "bottom-left"})
        } else if (data.password !== password) {
            toast.warning("Sai mật khẩu", {position: "bottom-left"})
        } else if (data.email === email && data.password === password) {
            toast.success("Đăng nhập thành công", {position: "bottom-left"})
            dispath(login(data))
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        checkLogin(email, password)
        navigate('/')
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
                        <p className={"note"}>{t('sign-in.t1')}
                            <NavLink to={"#"} className={"user-policy"}> {t('sign-in.li')}</NavLink>
                        </p>
                        <button type="submit"
                                className={`login-button${showLogin ? "" : "-disable"}`}>{t('sign-in.submit')}</button>
                        <p className={"note"}> {t('sign-in.no account')}
                            <NavLink to="/SigUp" className="Sigup">2handmembers.</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
