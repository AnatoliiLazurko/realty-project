import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Link } from 'react-router-dom';
import './signupStyles.css';
import useAuth from '../../hooks/useAuth';

const initialValues = {
    email: '',
    username: '',
    password: '',
};

const SIGNUP_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string().required().min(3).max(40),
    password: Yup.string().required().min(6).max(30),
});

const Signup = ({ onClose, openLogin }) => {

    const { register } = useAuth();

    const openLoginModal = () => {
        onClose();
        openLogin();
    }

    const submitHandler = (values, formikBag) => {
        try {
            register({ email: values.email, password: values.password, username: values.username });
            onClose();
        }
        catch (error) {
            console.log(error);
        }

        formikBag.resetForm();
    }

    return (
        <div className='signup-field'>

            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={SIGNUP_SCHEMA}
            >
                <Form className='form-signup'>
                    <h1>Sign up <i className="fa fa-user-circle-o"></i></h1>

                    <div>
                        <p className='label'>Email</p>
                        <ErrorMessage name='email' component="p" className='error'/>
                        <Field name="email" placeholder="Enter email" className='input-field'/>
                        
                    </div>

                    <div>
                        <p className='label'>Username</p>
                        <ErrorMessage name='username' component="p" className='error'/>
                        <Field name="username" placeholder="Username" className='input-field'/>
                    </div>

                    <div>
                        <p className='label'>Password</p>
                        <ErrorMessage name='password' component="p" className='error'/>
                        <Field type="password" name="password" placeholder="Enter password" className='input-field'/>
                    </div>

                    <Link onClick={openLoginModal} className='formik-link'>Log in</Link>

                    <Field type="submit" value="Sign up" id="signup" />
                    
                    <div className='signup-with'>
                        <hr />
                        <button className='with-google'>Continue with Google <i className="fa fa-google"></i></button>
                        <button className='with-facebook'>Continue with FaceBook <i className="fa fa-facebook"></i></button>
                        <button className='with-apple'>Continue with Apple <i className="fa fa-apple"></i></button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Signup;