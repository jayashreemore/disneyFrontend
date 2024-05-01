import React, { useState, useEffect } from 'react';
const LOCAL_URL = 'http://localhost:5050/movies';
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(LOCAL_URL);
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);
    const handleMovieClick = async (movieId) => {
        try {
            const response = await fetch(`${LOCAL_URL}/${movieId}`);
            const data = await response.json();
            setSelectedMovie(data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };
    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                        {movie.name}
                    </li>
                ))}
            </ul>
            {selectedMovie && (
                <div>
                    <h2>{selectedMovie.name}</h2>
                    <p>Prince: {selectedMovie.prince}</p>
                    <p>Princess: {selectedMovie.princess}</p>
                    <p>Story: {selectedMovie.story}</p>
                    <p>Ready to Watch: {selectedMovie.readyToWatch}</p>
                </div>
            )}
        </div>
    );
};
export default MovieList;