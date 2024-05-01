import React, { useEffect, useState } from 'react';

const Princesses = () => {
    const [princesses, setPrincesses] = useState([]);
    const LOCAL_URL = 'http://localhost:5050/princesses';
    const DEPLOY_URL = 'https://disneymoviecharacters-sba319.onrender.com/princesses'; // Change this to your deployed backend URL

    const getPrincesses = async () => {
        try {
            const response = await fetch(DEPLOY_URL);
            const data = await response.json();
            setPrincesses(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPrincesses();
    }, []);

    return (
        <>
            <h1>Princesses</h1>
            {princesses.length ? (
                princesses.map((princess) => (
                    <div key={princess.id}>
                        <h2>{princess.name}</h2>
                        <p>Age: {princess.age}</p>
                        {/*  can Add more details as needed */}
                    </div>
                ))
            ) : (
                <h2>No princesses to display yet</h2>
            )}
        </>
    );
};

export default Princesses;
