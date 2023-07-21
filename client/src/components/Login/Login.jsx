import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import './loginStyles.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const initialValues = {
    email: '',
    password: ''
};

const LOGIN_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),

});

const Login = ({ onClose, openSign }) => {

    const { login } = useAuth();

    const openSignModal = () => {
        onClose();
        openSign();
    }

    const submitHandler = (values, formikBag) => {
        try {
            login({ email: values.email, password: values.password });
            onClose();
        }
        catch (error) {
            console.log(error);
        }

        formikBag.resetForm();
    }

    return (
        <div className='login-field'>

            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={LOGIN_SCHEMA}
            >
                <Form className='form-login'>
                    <h1>Log in <i className="fa fa-unlock-alt"></i></h1>
                    
                    <div>
                        <p className='label'>Email</p>
                        <ErrorMessage name='email' component="p" className='error'/>
                        <Field name="email" placeholder="Your email" className='input-field' />
                    </div>

                    <div>
                        <p className='label'>Password</p>
                        <ErrorMessage name='password' component="p" className='error'/>
                        <Field type="password" name="password" placeholder="Enter password" className='input-field' />
                    </div>

                    <Link onClick={openSignModal} className='formik-link'>Create account</Link>

                    <Field type="submit" value="Login" id="login" />
                    
                    <div className='login-with'>
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

export default Login;