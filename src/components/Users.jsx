import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {

    const Users = useLoaderData();

    const usersStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px"
    }


    return (
        <div>
            <h2>Our User: {Users.length}</h2>
            <p>Lorem ipsum dolor sit.</p>

            <div style={usersStyle}>
                {
                    Users.map((user) => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;