import React from 'react';
import './headerStyles.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='navigation'>
                <div className="logo"><NavLink to="/">Royal<span>Realty</span></NavLink></div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/buy">Buy</NavLink>
                    <NavLink to="/rent">Rent</NavLink>
                    <NavLink to="/sell">Sell</NavLink>
                </nav>
                <div>
                    <button className='login'>Log in</button>
                    <button className='signup'>Sign up</button>
                </div>
            </div>
        </header>

    );
}

export default Header;