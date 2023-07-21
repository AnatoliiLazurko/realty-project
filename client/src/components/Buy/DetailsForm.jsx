import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
    name: '',
    phone: '',
    email: ''
};

const ASK_SCHEMA = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),

});

const DetailsForm = () => {


    const submitHandler = (values, formikBag) => {
        formikBag.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={ASK_SCHEMA}
        >
            <Form className='form-contact'>
                <h3>Contact this property</h3>

                <div>
                    <p className='label'>Name</p>
                    <ErrorMessage name='name' component="p" className='error'/>
                    <Field name="name" placeholder="Your name" className='input-field' />
                </div>
                
                <div>
                    <p className='label'>Phone</p>
                    <ErrorMessage name='phone' component="p" className='error'/>
                    <Field name="phone" placeholder="Your phone" className='input-field' />
                </div>
                
                <div>
                    <p className='label'>Email</p>
                    <ErrorMessage name='email' component="p" className='error'/>
                    <Field name="email" placeholder="Your email" className='input-field' />
                </div>

                <Field type="submit" value="Get consultation" id="login" />
                
            </Form>
        </Formik>
    );
}

export default DetailsForm;
