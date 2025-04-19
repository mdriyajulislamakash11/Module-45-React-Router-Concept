import React from 'react';
import "../components/Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <h2 className='text-center'>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;