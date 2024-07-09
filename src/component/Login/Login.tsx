import React, {useEffect, useState} from 'react';
import './Login.scss';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {getUserByEmail} from "../../service/UserService";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../redux/user.reducer";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const {t} = useTranslation('sigin')
    const dispath = useDispatch()
    useEffect(() => {
        let result: boolean = true;
        if (email === "" || email === null) {
            result = false;
        }
        if (password === "" || password === null) {
            result = false;
        }
        setShowLogin(result)
        console.log(showLogin)
    }, [email, password]);


    const checkLogin = async (email: string, password: string) => {
        let userAPI;
        let res = await getUserByEmail(email);
        if (res && res.data.length > 0)
            userAPI = res.data[0]
        if (userAPI === undefined) {
            toast.warning("Email không tồn tại", {position: "bottom-left"})
        } else if (userAPI.password !== password) {
            toast.warning("Sai mật khẩu", {position: "bottom-left"})
        } else if (userAPI.email === email && userAPI.password === password) {
            toast.success("Đăng nhập thành công", {position: "bottom-left"})
            dispath(login(userAPI))
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        checkLogin(email, password)

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
                        <p className={"note"}>{t('sign-in.t1')} <NavLink to={"#"}
                                                                         className={"user-policy"}> {t('sign-in.li')}</NavLink>
                        </p>
                        <button type="submit"
                                className={`login-button${showLogin ? "" : "-disable"}`}>{t('sign-in.submit')}</button>
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
