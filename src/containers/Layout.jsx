import React from 'react';
import '../styles/Layout.css';
import {TimeCharging} from "../components/TimeCharging";
const Layout = ({children}) => {
    return (
        <div className="container-mobile">
            <TimeCharging />
            {children}
        </div>
    );
};

export {Layout};