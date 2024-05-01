import React, { useState, useEffect } from 'react';

const LOCAL_URL = 'http://localhost:5050/princesses';

const PrincessList = () => {
    const [princesses, setPrincesses] = useState([]);
    const [selectedPrincess, setSelectedPrincess] = useState(null);

    useEffect(() => {
        const fetchPrincesses = async () => {
            try {
                const response = await fetch(LOCAL_URL);
                const data = await response.json();
                setPrincesses(data);
            } catch (error) {
                console.error('Error fetching princesses:', error);
            }
        };
        fetchPrincesses();
    }, []);

    const handlePrincessClick = async (princessId) => {
        try {
            const response = await fetch(`${LOCAL_URL}/${princessId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch princess details');
            }
            const data = await response.json();
            setSelectedPrincess(data);
        } catch (error) {
            console.error('Error fetching princess details:', error);
        }
    };

    return (
        <div>
            <h1>Princess List</h1>
            <ul>
                {princesses.map(princess => (
                    <li key={princess._id} onClick={() => handlePrincessClick(princess._id)}>
                        {princess.name}
                    </li>
                ))}
            </ul>
            {selectedPrincess && (
                <div>
                    <h2>{selectedPrincess.name}</h2>
                    <p>Prince: {selectedPrincess.prince}</p>
                    <p>Princess: {selectedPrincess.princess}</p>
                    <p>Story: {selectedPrincess.story}</p>
                    <p>Ready to Watch: {selectedPrincess.readyToWatch}</p>
                </div>
            )}
        </div>
    );
};

export default PrincessList;
