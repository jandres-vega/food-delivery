import React from 'react';
import logoFood from "../assets/Logo.svg";
import '../styles/VerificationCodePhone.css';
import {KeyBoardNumeric} from "../containers/KeyBoardNumeric";
const VerificationCodePhone = () => {
    return (
        <>
            <div className="container-login-phone">
                <img src={logoFood} alt="logo food" />
                <div className="sign-in-text">
                    <h2>Verification</h2>
                    <p>Enter the four-digit code from SMS SMS not received. Send againt?</p>
                </div>
                <div className="inputs-verification">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <KeyBoardNumeric />
            </div>
        </>
    );
};

export {VerificationCodePhone};