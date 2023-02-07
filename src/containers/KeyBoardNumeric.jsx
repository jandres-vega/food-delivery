import React from 'react';
import {numbers} from '../utils/dataSliders';
import {KeyNumber} from "../components/KeyNumber";
import '../styles/KeyBoardNumeric.css';
const KeyBoardNumeric = () => {
    return (
        <div className="container-number-phone">
            {
                numbers.map(number => (
                    <KeyNumber number={number}/>
                ))
            }
        </div>
    );
};

export {KeyBoardNumeric};