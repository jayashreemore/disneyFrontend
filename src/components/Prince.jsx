// Prince.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Prince = () => {
    const [princes, setPrinces] = useState([]);

    useEffect(() => {
        // Fetch list of princes from the backend
        const fetchPrinces = async () => {
            try {
                const response = await fetch('/princes');
                const data = await response.json();
                setPrinces(data);
            } catch (error) {
                console.error('Error fetching princes:', error);
            }
        };

        fetchPrinces();
    }, []);

    return (
        <div>
            <h2>List of Princes</h2>
            <ul>
                {princes.map(prince => (
                    <li key={prince._id}>
                        <Link to={`/princes/${prince._id}`}>{prince.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Prince;
