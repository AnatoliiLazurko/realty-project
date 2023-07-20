import React from 'react';
import './sellStyles.css';
import { Empty, Watermark } from 'antd';
import sellIcon from '../../images/sell-icon.png';
import SellTimeline from './SellTimeline';
import mainImage from '../../images/page-sell.jpg';

const Sell = () => {
    return (
        <div>
            <div className='buy-main'>
                <img src={mainImage} alt="Your Image"/>
                <div className="overlay">
                    <h1>Explore different ways to sell your home</h1>
                    <p>Get your home's value and see selling options</p>
                </div>
            </div>
            <div className='sell-block'>

                <div className='sell-info'>
                    <div>
                        <h1>Sell and rent with trusted realtors</h1>
                        <p>As a real estate company, we are proud to offer a wide range of services
                            related to listing your property. Our team of professionals has many years
                            of experience and excellent knowledge of the market, which allows us to
                            provide the best opportunities to effectively place your property on the
                            real estate market.
                            <br />
                            <br />
                            Our team is also able to provide professional advice on pricing, marketing,
                            legal and other important aspects of real estate. We make every effort to
                            make the process of listing your property as convenient and profitable as
                            possible for you.
                        </p>
                    </div>
                    <div>
                        <img src={sellIcon} alt="hosue icon" />
                    </div>
                </div>

                <div className='watermark'>
                    <h2>Your realty can appear here</h2>
                    <Watermark className='mark-field' content='Your realty'>
                        <div style={{ height: 150 }}>
                            <Empty description={false} className='empty-picture'/>
                        </div>
                    </Watermark>
                </div>

                <div className='sell-timeline'>
                    <SellTimeline />
                </div>
            </div>
        </div>
    );
}

export default Sell;
