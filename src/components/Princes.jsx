import React, { useEffect, useState } from 'react';

const Princes = () => {
    const [princes, setPrinces] = useState([]);
    const LOCAL_URL = 'http://localhost:5050//princes';
    const DEPLOY_URL = 'https://disneymoviecharacters-sba319.onrender.com/princes'; // Change this to your deployed backend URL

    const getPrinces = async () => {
        try {
            const response = await fetch(DEPLOY_URL);
            const data = await response.json();
            setPrinces(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPrinces();
    }, []);

    return (
        <>
            <h1>Princes</h1>
            {princes.length ? (
                princes.map((prince) => (
                    <div key={prince.id}>
                        <h2>{prince.name}</h2>
                        <p>Age: {prince.age}</p>
                        {/*  can Add more details as needed */}
                    </div>
                ))
            ) : (
                <h2>No princes to display yet</h2>
            )}
        </>
    );
};

export default Princes;
