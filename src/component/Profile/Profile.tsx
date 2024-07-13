import React, {useState} from 'react';
import './Profile.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {NavLink} from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [showPassword, setShowPassword] = useState(false);

    if (!user) {
        return (
            <div className={"profile"}>
                <div className="profile-containerr">
                    <h2 className={"profile-h2"}>You are not logged in. <NavLink to="/Login">Login here</NavLink></h2>
                </div>
            </div>
        );
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={"profile"}>
            <div className="profile-container">
                <h2 className={"profilee-h2"}>Profile</h2>
                <div className="profile-content">
                    <div className="profile-image">
                        <img src={"#"} alt="profile"></img>
                    </div>

                    <div className="profile-details">
                        <div className={"profile-details-item"}>
                            <label>Email:</label>
                            <p>{user.email}</p>
                        </div>
                        <div className={"profile-details-item"}>
                            <label>First Name:</label>
                            <p>{user.firstName}</p>
                        </div>
                        <div className={"profile-details-item"}>
                            <label>Last Name:</label>
                            <p>{user.lastName}</p>
                        </div>
                        <div className={"profile-details-item"}>
                            <label>Password:</label>
                            {/*<p>{user.password}</p>*/}
                            <div className="password-field">
                                <p className={"show-pass"}>{showPassword ? user.password : '***'}</p>
                                <button onClick={togglePasswordVisibility} className="password-toggle">
                                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                </button>
                            </div>
                        </div>
                        <div className={"profile-details-item"}>
                            <label>Date of birth:</label>
                            <p>{user.dateOfBirth}</p>
                        </div>
                        <div className={"profile-details-item"}>
                            <label>Country:</label>
                            <p>{user.country}</p>
                        </div>
                        <div className={"profile-details-item"}>
                            <label>gender:</label>
                            <p>{user.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
