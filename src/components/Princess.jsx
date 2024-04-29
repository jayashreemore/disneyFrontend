// Princess.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Princess = () => {
    const [princesses, setPrincesses] = useState([]);

    useEffect(() => {
        const fetchPrincesses = async () => {
            try {
                const response = await fetch('/princesses');
                const data = await response.json();
                setPrincesses(data);
            } catch (error) {
                console.error('Error fetching princesses:', error);
            }
        };

        fetchPrincesses();
    }, []);

    return (
        <div>
            <h2>List of Princesses</h2>
            <ul>
                {princesses.map(princess => (
                    <li key={princess._id}>
                        <Link to={`/princesses/${princess._id}`}>{princess.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Princess;
