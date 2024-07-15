import React, {useState} from 'react';
import './SigUp.scss';
import {NavLink, useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {useGetUserQuery, useRegisterUserMutation} from "../../service/UserService";
import {User} from "../../models/User.modal";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

const SignUp = () => {
    const [formData, setFormData] = useState<User>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        country: '',
        gender: '',
    });

    const navigate = useNavigate();
    const [addUser] = useRegisterUserMutation()
    const {t} = useTranslation('sigup')
    const {data} = useGetUserQuery(formData.email)

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value, type} = event.target;
        if (type === 'checkbox') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: !prevFormData[name as keyof User],
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, data?: User) => {
        event.preventDefault();

        if (data && data.email === formData.email) {
            console.log(data);
            toast.error("Email đăng ký đã tồn tại", {position: "bottom-center"});
        } else {
            addUser(formData);
            const userToStore = JSON.stringify(formData);
            Cookies.set('user', userToStore, {
                maxAge: 10 * 60,
                path: '/',
            });
            navigate('/');
        }
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
