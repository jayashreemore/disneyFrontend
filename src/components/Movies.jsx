import React, { useEffect, useState } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const LOCAL_URL = 'http://localhost:5050/movies';
    const DEPLOY_URL = 'https://disneymoviecharacters-sba319.onrender.com/movies'; // Change this to your deployed backend URL

    const getMovies = async () => {
        try {
            const response = await fetch(DEPLOY_URL);
            const data = await response.json();
            setMovies(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <h1>Movies</h1>
            {movies.length ? (
                movies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Release Year: {movie.releaseYear}</p>
                        {/* Add more details as needed */}
                    </div>
                ))
            ) : (
                <h2>No movies to display yet</h2>
            )}
        </>
    );
};

export default Movies;
