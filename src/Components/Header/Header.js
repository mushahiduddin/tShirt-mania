import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-bar'>
            <Link to ='/home'>Home</Link>
            <Link to ='/orders'>Orders</Link>
            <Link to ='/about'>About</Link>
        </div>
    );
};

export default Header;