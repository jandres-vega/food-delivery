import React from 'react';
import logoFood from '../assets/Logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {ButtonCustomer} from "../components/ButtonCustomer";
import '../styles/LoginPhone.css';
import {Link} from "react-router-dom";
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
                    </label>
                    <input type="text" />
                </div>
            </div>
            <div className="container-btn-login">
                <Link to="/verification-code-phone" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <ButtonCustomer textButton="Login" />
                </Link>
            </div>
        </>
    );
};

export default LoginPhone;