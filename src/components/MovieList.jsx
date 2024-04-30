import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5050/movies');
                setMovies(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Movies</h2>
            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <ul>
                    {movies.map(movie => (
                        <li key={movie._id}>
                            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieList;
