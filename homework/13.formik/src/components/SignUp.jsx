import React from 'react'
import {Formik} from "formik"
import { validate } from '../validation'
import InputField from './InputField'
const SignUp = () => {
  return (
    <div>
        <h1>SignUp Form</h1>
        <Formik 
            initialValues={{
                firsName:"",
                lastName:"",
                password:"",
                cinfirmPassword:"",
            }}
            validationSchema={validate}
        >
            {
                    (({ errors, touched }) => (
                        <Form>
                            <InputField type='text' name='firstName' label='First Name' />
                            {/* {errors.firstName && touched.firstName && (<div>{errors.firstName}</div>)} */}
                            <InputField type='text' name='lastName' label='Last Name' />
                            <InputField type='email' name='email' label='Email' />
                            <InputField type='password' name='password' label='Password' />
                            <InputField type='password' name='confirmPassword' label='Confirm Password' />
                            <button className="btn btn-primary mt-4">Submit</button>
                        </Form>
                    ))
                }

        </Formik>
    </div>
  )
}

export default SignUp