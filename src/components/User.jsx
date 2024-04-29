// User.jsx
import React, { useState, useEffect } from 'react';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>List of Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default User;
