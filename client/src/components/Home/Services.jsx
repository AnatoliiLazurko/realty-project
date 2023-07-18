import React from 'react';
import './homeStyles.css';
import { NavLink } from 'react-router-dom';
import serviceOne from '../../images/service-one.jpg';
import serviceTwo from '../../images/service-two.jpg';
import servicethree from '../../images/service-three.jpg'

const Services = () => {
    return (
        <div className="main-services">
            <h1 className='header'>See how we can help</h1>

            <div className='services'>
                <div className='first'>
                    <img src={serviceOne} alt="" />
                    <div className='about-service'>
                        <h1 className="service-title">BUY A REALTY</h1>
                        <p>
                            We understand that buying real estate is an important decision that affects your life and financial
                            situation. That's why we work with great attention to detail, follow transparent processes and
                            provide you with all the support you need to ensure your complete satisfaction.
                        </p>
                        <p>
                            Our goal is to make the process of buying real estate as simple and convenient as possible for you.
                            Our specialists are ready to answer all your questions, guide you through the process of filing
                            documents and help with calculations and terms of purchase.
                        </p>
                    </div>
                </div>

                <div className='second'>
                    <div className='about-service'>
                        <h1 className="service-title">RENT A REALTY</h1>
                        <p>
                            Whether you are looking for an apartment, house or commercial space for rent, we offer a wide range
                            of affordable properties to suit your needs and budget. Our team of experienced real estate
                            professionals will help you find the perfect property that meets all your requirements.
                        </p>
                        <p>
                            Our goal is to provide you with a hassle-free and convenient property rental. We understand
                            the importance of your time and the need for comfortable living or business conditions.
                            Therefore, we select and offer you reliable objects, ensure transparency and compliance with
                            legal norms at every stage of the rental process.
                        </p>
                    </div>
                    <img src={serviceTwo} alt="" />
                </div>

                <div className='third'>
                    <img src={servicethree} alt="" />
                    <div className='about-service'>
                        <h1 className="service-title">SELL YOUR REALTY</h1>
                        <p>
                            As a leading real estate company, we are proud to offer our services to help you sell your property.
                            Whether you are selling a home, condo or commercial property, we have the knowledge, experience and
                            resources to ensure a successful transaction.
                        </p>
                        <p>
                            Choose our real estate company and you will receive professional support and expert assistance at
                            every step of the process of selling your property. Contact us today and we'll be happy to get
                            started on the successful sale of your property.
                        </p>

                        <NavLink to='/sell'>Sales details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
