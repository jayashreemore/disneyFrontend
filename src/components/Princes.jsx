import { useEffect, useState } from 'react';

export default function Princes() {
    const [princes, setPrinces] = useState([]);
    const LOCAL_URL = 'http://localhost:5050/princes';
    const DEPLOY_URL = 'https://disneymoviecharacters-sba319.onrender.com/princes';

    const getPrinces = async () => {
        try {
            const response = await fetch(DEPLOY_URL); // Change the URL to the princes endpoint
            const data = await response.json();
            console.log(data[0]);
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
            <div>Princes</div>
            {princes.length ? (
                princes.map((prince) => (
                    <div key={prince.id}> {/* Assuming each prince has a unique ID */}
                        <h2>{prince.name}</h2>
                        {/* Add more details about the prince if available */}
                    </div>
                ))
            ) : (
                <h2>No princes to display yet</h2>
            )}
        </>
    );
}
