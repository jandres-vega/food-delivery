import React from 'react';
import '../styles/KeyNumber.css';
const KeyNumber = ({number}) => {
    return (
        <div className="number-phone">
            {number.num}
            <div>
                <span>{number.ltr}</span>
            </div>
        </div>
    );
};

export {KeyNumber};