import React, {useState} from 'react';
import './Login.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <Header></Header>
            <div className="align-Login">
                <div className="login-container">
                    <h2>2handtropical</h2>
                    <h3>Log In</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                            <NavLink to="#" className="forgot-password">Forgot Pass?</NavLink>
                        </div>
                        <p className={"note"}>By logging into the 2handtropica store you accept our <NavLink to={"#"}
                                                                                                             className={"user-policy"}> user
                            policy </NavLink> policies</p>
                        <button type="submit" className="login-button">Submit</button>
                        <p className={"note"}>
                            You don't have account? <NavLink to="/SigUp" className="Sigup">2handmembers.</NavLink>
                        </p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
