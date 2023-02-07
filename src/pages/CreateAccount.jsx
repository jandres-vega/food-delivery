import React from 'react';
import {ButtonCustomer} from "../components/ButtonCustomer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faEye} from '@fortawesome/free-solid-svg-icons';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
    return (
        <React.Fragment>
            <div className="container-create-account">
                <div className="container-register-user">
                    <h2>Create account</h2>
                    <div className="userName-account">
                        <FontAwesomeIcon className="icon-check"  icon={faCheck} />
                        <input type="text" placeholder="Andres vega" className="text-account-input"/>
                    </div>
                    <div className="email-account">
                        <FontAwesomeIcon className="icon-check" icon={faCheck} />
                        <input type="text" placeholder="example@gmail.com" className="text-account-input"/>
                    </div>
                    <div className="password-account">
                        <FontAwesomeIcon className="icon-check" icon={faEye}/>
                        <input type="password" placeholder="password" className="text-account-input"/>
                    </div>
                </div>
                <div className="btn-sign-in-account">
                    <ButtonCustomer textButton="Sign in" />
                </div>
            </div>
        </React.Fragment>
    );
};

export {CreateAccount};