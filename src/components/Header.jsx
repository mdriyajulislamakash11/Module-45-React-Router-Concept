import React from 'react';
import "../components/Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <h2 className='text-center'>Navbar</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;