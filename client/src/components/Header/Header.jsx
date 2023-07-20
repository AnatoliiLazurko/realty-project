import React, { useState } from 'react';
import './headerStyles.css';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import LoginModal from '../Login/LoginModal';
import SignupModal from '../Signup/SignupModal';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isModalLoginOpen, setModalLoginOpen] = useState(false);
    const [isModalSignOpen, setModalSignOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setModalLoginOpen(true);
    };

    const handleCloseLoginModal = () => {
        setModalLoginOpen(false);
    };

    const handleOpenSignModal = () => {
        setModalSignOpen(true);
    };

    const handleCloseSignModal = () => {
        setModalSignOpen(false);
    };


    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const isDropdownActive = (dropdownName) => {
        return activeDropdown === dropdownName;
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
        <>
            {isModalLoginOpen && (
                <div className="screen-dimming"></div>
            )}
            {isModalSignOpen && (
                <div className="screen-dimming"></div>
            )}
            <header>
                <div className='navigation'>
                    <div className="logo"><NavLink to="/">Royal<span>Realty</span></NavLink></div>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <div onMouseEnter={() => toggleDropdown('buy')}
                            onMouseLeave={closeDropdown}
                            className={isDropdownActive('buy') ? 'active' : ''}
                        >
                            Buy
                            {isDropdownActive('buy') && (
                            <div className="submenu">
                                <NavLink to="/buy/house">House</NavLink>
                                <NavLink to="/buy/new-house">New house</NavLink>
                                <NavLink to="/buy/flat">Flat</NavLink>
                                <NavLink to="/buy/new-flat">New flat</NavLink>
                                <NavLink to="/buy/villa">Villa</NavLink>
                                <NavLink to="/buy/storage">Storage</NavLink>
                                <NavLink to="/buy/other">Other</NavLink>
                                <p>Buy</p>
                            </div>
                            )}
                        </div>
                        <div onMouseEnter={() => toggleDropdown('rent')}
                            onMouseLeave={closeDropdown}
                            className={isDropdownActive('rent') ? 'active' : ''}
                        >
                            Rent
                            {isDropdownActive('rent') && (
                            <div className="submenu">
                                <NavLink to="/rent/house">House</NavLink>
                                <NavLink to="/rent/mountaine_house">Mountaine house</NavLink>
                                <NavLink to="/rent/forest_house">Forest house</NavLink>
                                <NavLink to="/rent/flat">Flat</NavLink>
                                <NavLink to="/rent/villa">Villa</NavLink>
                                <NavLink to="/rent/room">Room</NavLink>
                                <NavLink to="/rent/beach-house">Beach house</NavLink>
                                <NavLink to="/rent/other">Other</NavLink>
                                <p>Rent</p>   
                            </div>
                            )}
                        </div>
                        <NavLink to="/sell">Sell</NavLink>
                    </nav>
                    <div>
                        <button onClick={handleOpenLoginModal} className='login'>Log in</button>
                        <button onClick={handleOpenSignModal} className='signup'>Sign up</button>
                    </div>
                </div>
            </header>

            <LoginModal isOpen={isModalLoginOpen} onClose={handleCloseLoginModal} openSign={handleOpenSignModal} />
            <SignupModal isOpen={isModalSignOpen} onClose={handleCloseSignModal} openLogin={handleOpenLoginModal} />
        </>

    );
}

export default Header;