import React from 'react';
import '../styles/Layout.css';
import {System} from "../components/System";
const Layout = ({children}) => {
    return (
        <div className="container-mobile">
            <System />
            {children}
        </div>
    );
};

export {Layout};