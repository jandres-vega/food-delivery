import React from 'react';
import logoFood from '../assets/Logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {ButtonCustomer} from "../components/ButtonCustomer";
import '../styles/LoginPhone.css';
const LoginPhone = () => {
    return (
        <>
            <div className="container-login-phone">
                <img src={logoFood} alt="logo food" />
                <div className="sign-in-text">
                    <h2>Sing in</h2>
                    <p>Login or create an account with your phone number to startordering</p>
                </div>
                <div className="container-input-phone">
                    <FontAwesomeIcon className="icon-phone" icon={faPhone} />
                    <label className="icon-phone-label">
                        +1
                        <input type="text" />
                    </label>
                </div>
            </div>
            <div className="container-btn-login">
                <ButtonCustomer textButton="Login" />
            </div>
        </>
    );
};

export default LoginPhone;