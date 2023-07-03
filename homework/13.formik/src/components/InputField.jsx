import { ErrorMessage, useField } from 'formik'
import React from 'react'

const InputField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    console.log('meta', meta);
    return (
        <div>
            <label>{label}</label>
            <input  autoComplete='off' {...props} {...field} />
            <ErrorMessage className='error' component='div' name={field.name} />
        </div>
    )
}

export default InputField