import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWifi, faSignal, faBattery} from '@fortawesome/free-solid-svg-icons';
import '../styles/TimeCharging.css';
const TimeCharging = () => {
    return (
        <section className="container-time">
            <span>9:40</span>
            <div className="icons-w-s-c">
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faSignal} />
                <FontAwesomeIcon icon={faBattery} />
            </div>
        </section>
    );
};

export {TimeCharging};