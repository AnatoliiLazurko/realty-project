import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
    email: '',
    message: ''
};

const MESSAGE_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    message: Yup.string().required(),

});

const FooterForm = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={MESSAGE_SCHEMA}
            >
                <Form>
                    <h1>Leave your message here</h1>

                    <div>
                        <p className='label'>Email</p>
                        <Field className='input' name='email' />
                        <ErrorMessage name='email' component="p" className='error'/>
                    </div>
                    <div>
                        <p className='label'>Message</p>
                        <Field className='input' component="textarea" rows="4" name='message' />
                        <ErrorMessage name='message' component="p" className='error'/>
                    </div>

                    <Field type="submit" value="Send" id="send"/>
                </Form>
            </Formik>
        </>
    );
}

export default FooterForm;
