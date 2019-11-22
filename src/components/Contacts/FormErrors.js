import React from 'react';

const FormErrors = ({formErrors}) => (
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, index) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={index}>
                        {formErrors[fieldName]}
                    </p>
                )
            } else {
                return '';
            }
        })}
    </div>
)

export default FormErrors;