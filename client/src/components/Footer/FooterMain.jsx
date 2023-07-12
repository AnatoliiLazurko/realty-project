import React from 'react';
import FooterForm from './FooterForm';
import { Link } from 'react-router-dom';

const FooterMain = () => {
    return (
        <div className='footer-main'>
            <div className='footer-nav'>
                <div className='column nav'>
                    <h3>Buy</h3>
                    <ul>
                        <li><Link to="/buy/house">HOUSE</Link></li>
                        <li><Link to="/buy/new-house">NEW HOUSE</Link></li>
                        <li><Link to="/buy/flat">FLAT</Link></li>
                        <li><Link to="/buy/new-flat">NEW FLAT</Link></li>
                        <li><Link to="/buy/villa">VILLA</Link></li>
                        <li><Link to="/buy/storage">STORAGE</Link></li>
                        <li><Link to="/buy/other">OTHER</Link></li>
                    </ul>
                </div>
                <div className='column nav nav-rent'>
                    <h3>Rent</h3>
                    <ul>
                        <li><Link to="/rent/house">HOUSE</Link></li>
                        <li><Link to="/rent/mountaine_house">MOUNTAINE HOUSE</Link></li>
                        <li><Link to="/rent/forest_house">FOREST HOUSE</Link></li>
                        <li><Link to="/rent/flat">FLAT</Link></li>
                        <li><Link to="/rent/villa">VILLA</Link></li>
                        <li><Link to="/rent/room">ROOM</Link></li>
                        <li><Link to="/rent/beach-house">BEACH HOUSE</Link></li>
                    </ul>
                </div>
                <div className='column info'>
                    <div>
                        <h3 className='first-title'>Work time</h3>
                        <p>Mon-Fr: 8.00 am – 5.00 pm</p>
                        <p>Sat: 8.00 am – 1.30 pm</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>London</p>
                        <p>Kingston Road</p>
                        <p>SW16 6JU</p>
                    </div>
                    <br />
                    <div>
                        <h3>Contacts</h3>
                        <p><a href="#mail">royalrealty@gmail.com</a></p>
                        <p><a href="#phone">07722 489214</a></p>
                    </div>
                </div>
            </div>
            <div className='footer-form'>
                <div className='column'>
                    <iframe className='footer-map' title='footer-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19904.44744776505!2d-0.12877825!3d51.4203992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2suk!4v1689079267373!5m2!1suk!2suk" loading="lazy"></iframe>
                </div>
                <div className='column'>
                    <FooterForm />
                </div>
            </div>
        </div>
    );
}

export default FooterMain;
