import React from 'react';

import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className='group'>
            {/* <form> */}
                <input 
                className='form-input'
                onChange={handleChange}
                {...otherProps}    
                />
                {
                label ? (
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                ) : null
                }
            {/* </form> */}
        </div>
    )
}

export default FormInput;