import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PrinceList = () => {
    const [princes, setPrinces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrinces = async () => {
            try {
                const response = await axios.get('http://localhost:5050/princes');
                setPrinces(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching princes:', error);
                setLoading(false);
            }
        };
        fetchPrinces();
    }, []);

    return (
        <div>
            <h2>Princes</h2>
            {loading ? (
                <p>Loading princes...</p>
            ) : (
                <ul>
                    {princes.map(prince => (
                        <li key={prince._id}>
                            <Link to={`/princes/${prince._id}`}>{prince.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PrinceList;
