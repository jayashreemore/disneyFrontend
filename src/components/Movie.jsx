// Movie.jsx
import React, { useState, useEffect } from 'react';

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/movies');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>List of Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        <p>Name: {movie.name}</p>
                        <p>Prince: {movie.prince}</p>
                        <p>Princess: {movie.princess}</p>
                        <p>Story: {movie.story}</p>
                        <p>Ready To Watch: {movie.readyToWatch ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movie;
