import React, {useState} from 'react';
import './SigUp.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {NavLink} from 'react-router-dom';
import {useTranslation} from "react-i18next";

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

    const { t } = useTranslation('sigup')

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
            <div className="align-SignUp">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h3 className={"name-login"}>{t('sign-up.hello')}</h3>
                    <p>
                        {t('sign-up.t1')}
                    </p>
                    <input
                        type="email"
                        name="email"
                        placeholder={t('sign-up.address')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder={t('sign-up.pass')}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder={t('sign-up.Fname')}
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder={t('sign-up.Lname')}
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <p>{t('sign-up.t2')}</p>
                    <input
                        type="date"
                        name="dateOfBirth"
                        placeholder={t('sign-up.DOB')}
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="India">{t('sign-up.india')}</option>
                        <option value="USA">{t('sign-up.usa')}</option>
                        <option value="UK">{t('sign-up.uk')}</option>
                    </select>
                    <div className="sex">
                        <button
                            type={"button"}
                            className={`gender-button ${formData.gender === 'Male' ? 'active' : ''}`}
                            onClick={() => handleGenderChange('Male')}
                        >
                            {t('sign-up.men')}
                        </button>
                        <button
                            type={"button"}
                            className={`gender-button ${formData.gender === 'Female' ? 'active' : ''}`}
                            onClick={() => handleGenderChange('Female')}
                        >
                            {t('sign-up.woman')}
                        </button>
                        <button
                            type={"button"}
                            className={`gender-button ${formData.gender === 'other' ? 'active' : ''}`}
                            onClick={() => handleGenderChange('other')}
                        >
                            {t('sign-up.other')}
                        </button>
                    </div>
                    <label>
                        <input
                            type="checkbox"
                            name="emailUpdates"
                            checked={formData.emailUpdates}
                            onChange={handleChange}
                        />
                        {t('sign-up.t3')}
                    </label>
                    <button type="submit">{t('sign-up.come')}</button>
                    <p>
                        {t('sign-up.have a mem')} <NavLink to="/Login">{t('sign-up.sigin')}</NavLink>.
                    </p>
                </form>
            </div>
    </>
    );
};

export default SignUp;
