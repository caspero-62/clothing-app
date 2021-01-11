import React  from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <div className='button-container'>
            <button 
            className={`${inverted ? 'inverted' : ''}  ${isGoogleSignIn ? 'google-button' : ''} custom-button`}
            {...otherProps}
            >
            {children}
            </button>
        </div>
    )
}

export default CustomButton;