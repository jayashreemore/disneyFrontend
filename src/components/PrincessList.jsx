import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PrincessList = () => {
    const [princesses, setPrincesses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrincesses = async () => {
            try {
                const response = await axios.get('http://localhost:5050/princesses');
                setPrincesses(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching princesses:', error);
                setLoading(false);
            }
        };
        fetchPrincesses();
    }, []);

    return (
        <div>
            <h2>Princesses</h2>
            {loading ? (
                <p>Loading princesses...</p>
            ) : (
                <ul>
                    {princesses.map(princess => (
                        <li key={princess._id}>
                            <Link to={`/princesses/${princess._id}`}>{princess.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PrincessList;
