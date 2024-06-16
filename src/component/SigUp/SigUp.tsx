import React, { useState } from 'react';
import "./SigUp.scss"
import Header from "../Hearder/Header";
import Footer from "../Footer/Footer";
import {BrowserRouter as Router,Route, Routes, NavLink, Link} from "react-router-dom";
interface FormData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    country: string;
    gender: string;
    emailUpdates: boolean;
}

const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        country: '',
        gender: '',
        emailUpdates: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checkValidity } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checkValidity() : value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="page-container1" >
            <Header/>
        <div className="signup-form">
            <h2>BECOME A NIKE MEMBER</h2>
            <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    {/* Add more countries as needed */}
                </select>
                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                        Female
                    </label>
                </div>
                <label>
                    <input type="checkbox" name="emailUpdates" checked={formData.emailUpdates} onChange={handleChange} />
                    Sign up for emails to get updates from Nike on products, offers and your Member benefits
                </label>
                <button type="submit">JOIN US</button>
            <p>Already a Member? <NavLink to="/Login">Sign In</NavLink>.</p>
            </form>
        </div>
            <Footer/>
        </div>
    );
};

export default SignUp;
