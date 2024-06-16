import React, { useState } from 'react';
import './Login.scss';
import Header from "../Hearder/Header";
import Footer from "../Footer/Footer";
import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="page-container" >
        <Header></Header>
        <div className="login-container">
            <h2>2handtropical</h2>
            <h3>Đăng nhập</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Địa chỉ email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox" /> Ghi nhớ tôi
                    </label>
                </div>
                <button type="submit" className="login-button">Đăng nhập</button>
                <NavLink to="#" className="forgot-password">Quên mật khẩu?</NavLink>
                <p>
                    bạn chưa có tài khoản? <NavLink to="/SigUp" className="Sigup">2handmembers.</NavLink>
                </p>
            </form>
        </div>
    <Footer></Footer>
    </div>
    );
};

export default Login;
