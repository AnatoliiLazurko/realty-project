import React from 'react';
import './homeStyles.css';
import Services from './Services';
import mainOne from '../../images/main-one.jpg';
import mainTwo from '../../images/main-two.jpg';
import mainThree from '../../images/main-three.jpg';
import mainFour from '../../images/main-four.jpg';

const Home = () => {
    return (
        <>
            <div className='main-first'>
                <div className='introduction'>
                    <div className='description'>
                        <div>
                            <div className='wrapper'>
                                <h1 className='header'>Search, buy, rent, sell and enjoy with RoyalRealty</h1>
                            </div>
                            <p>
                                Welcome to our real estate search website! As a reliable and convenient resource,
                                we offer you a wide selection of residential and commercial premises for sale and rent.
                            </p>
                            <p>
                                On our website, you can choose the best option for yourself in terms
                                of buying or renting real estate or offer your real estate. Use the
                                navigation bar to select the section you need and look for the best option for you.
                            </p>
                            
                        </div>
                    </div>
                    <div className='pictures'>
                        <div className='photo'>
                            <img src={mainOne} alt="" />
                        </div>
                        <div className='photo'>
                            <img src={mainTwo} alt="" />
                        </div>
                        <div className='photo'>
                            <img src={mainThree} alt="" />
                        </div>
                        <div className='photo'>
                            <img src={mainFour} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Services />
        </>
    );
}

export default Home;
