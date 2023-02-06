import React from 'react';
import {Link} from "react-router-dom";
import {ButtonCustomer} from "../components/ButtonCustomer";
import '../styles/SlidesPages.css';

const SlidePages = ({image, text, toText}) => {
    return (
        <div className="slide-page-one">
            <div className="slide-page-icon-1">
                <img src={image} alt={'slide-one'} />
            </div>
            <div className="slide-page-desc">
                <p>{text}</p>
                <div className="container-selects">
                    <div className="sec-1"></div>
                    <div className="sec-2"></div>
                    <div className="sec-2"></div>
                </div>
                <Link to={toText} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <ButtonCustomer textButton="Siguiente" />
                </Link>
            </div>
        </div>
    );
};

export default SlidePages;