import React from 'react';
import './footerStyles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import FooterMain from './FooterMain';

const Footer = () => {
    return (
        <footer>

            <div className='footer-logo'>
                <Link to="/"><p>R<span>R</span></p></Link>
            </div>
            <div className='company-name'>
                <p>R O Y A L <span>R E A L T Y</span></p>
            </div>

            <FooterMain />
            
            <div className='social-media'>
                <p>Follow us on social networks</p>
                <a href="#instagram"><InstagramIcon /></a>
                <a href="#facebook"><FacebookIcon /></a>
                <a href="#twitter"><TwitterIcon /></a>
                <a href="#linkedin"><LinkedInIcon /></a>
            </div>
        </footer>
    );
}

export default Footer;
