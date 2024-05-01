import React, { useState, useEffect } from 'react';

const LOCAL_URL = 'http://localhost:5050/princes';

const PrinceList = () => {
    const [princes, setPrinces] = useState([]);
    const [selectedPrince, setSelectedPrince] = useState(null);

    useEffect(() => {
        const fetchPrinces = async () => {
            try {
                const response = await fetch(LOCAL_URL);
                const data = await response.json();
                setPrinces(data);
            } catch (error) {
                console.error('Error fetching princes:', error);
            }
        };
        fetchPrinces();
    }, []);

    const handlePrinceClick = async (princeId) => {
        try {
            const response = await fetch(`${LOCAL_URL}/${princeId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch prince details');
            }
            const data = await response.json();
            setSelectedPrince(data);
        } catch (error) {
            console.error('Error fetching prince details:', error);
        }
    };

    return (
        <div>
            <h1>Prince List</h1>
            <ul>
                {princes.map(prince => (
                    <li key={prince._id} onClick={() => handlePrinceClick(prince._id)}>
                        {prince.name}
                    </li>
                ))}
            </ul>
            {selectedPrince && (
                <div>
                    <h2>{selectedPrince.name}</h2>
                    <p>Prince: {selectedPrince.prince}</p>
                    <p>Princess: {selectedPrince.princess}</p>
                    <p>Story: {selectedPrince.story}</p>
                    <p>Ready to Watch: {selectedPrince.readyToWatch}</p>
                </div>
            )}
        </div>
    );
};

export default PrinceList;
