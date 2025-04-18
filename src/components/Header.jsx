import React from 'react';

const Header = () => {
    return (
        <div className=''>
            <h2 className='text-center'>Navbar</h2>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;