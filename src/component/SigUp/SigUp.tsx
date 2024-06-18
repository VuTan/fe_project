import React, {useState} from 'react';
import './SigUp.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {NavLink} from 'react-router-dom';

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

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value, type} = event.target;
        if (type === 'checkbox') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: !prevFormData[name as keyof FormData],
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleGenderChange = (selectedGender: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            gender: selectedGender,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (<>
            <Header/>
            <div className="align-SignUp">
                <form onSubmit={handleSubmit} className="signup-form">
                    {/*<div className="column">*/}
                    <h3>BECOME A NIKE MEMBER</h3>
                    <p>
                        Create your Nike Member profile and get first access to the very best of Nike products,
                        inspiration, and community.
                    </p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    {/*</div>*/}
                    {/*<div className="column">*/}
                    <p>Get a Nike Member Reward every year on your Birthday.</p>
                    <input
                        type="date"
                        name="dateOfBirth"
                        placeholder="Date of Birth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                    <div className="sex">
                        <button
                            type={"button"}
                            className={`gender-button ${formData.gender === 'Male' ? 'active' : ''}`}
                            onClick={() => handleGenderChange('Male')}
                        >
                            Male
                        </button>
                        <button
                            type={"button"}
                            className={`gender-button ${formData.gender === 'Female' ? 'active' : ''}`}
                            onClick={() => handleGenderChange('Female')}
                        >
                            Female
                        </button>
                        <button
                            type={"button"}
                            className={`gender-button ${formData.gender === 'other' ? 'active' : ''}`}
                            onClick={() => handleGenderChange('other')}
                        >
                            Other
                        </button>
                    </div>
                    <label>
                        <input
                            type="checkbox"
                            name="emailUpdates"
                            checked={formData.emailUpdates}
                            onChange={handleChange}
                        />
                        Sign up for emails to get updates from Nike on products, offers, and your Member benefits
                    </label>
                    <button type="submit">JOIN US</button>
                    <p>
                        Already a Member? <NavLink to="/Login">Sign In</NavLink>.
                    </p>
                    {/*</div>*/}
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default SignUp;
