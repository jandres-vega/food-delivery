import React from 'react';
import logoFood from '../assets/Logo.svg';
import '../styles/LandingPage.css';
import {useNavigate} from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/slide-page-one')
    }, 2000)

    return (
        <div className="LandingPage">
            <div className="container-logo">
                <img src={logoFood} alt={'logo-food'}/>
            </div>
        </div>
    );
};

export {LandingPage};