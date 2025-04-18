import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <h2>this is home components</h2>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

            <Outlet />
        </div>
    );
};

export default Home;