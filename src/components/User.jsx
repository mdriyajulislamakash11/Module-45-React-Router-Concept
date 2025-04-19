import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {

    const {id, name, email, phone} = user;

    const userStyle = {
        border: "2px solid red",
        padding: "12px",
        borderRadius: "10px",
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>

            <Link to={`/user/${id}`}>User Dtails</Link>
        </div>
    );
};

export default User;