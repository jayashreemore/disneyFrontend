import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = "http://localhost:5050"; // Update this with your backend URL

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        try {
            const response = await axios.get(`${"http://localhost:5050"}/movies/search`, {
                params: {
                    title: title
                }
            });
            setMovies(response.data || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleSearch = () => {
        searchMovies(searchTerm);
    };

    return (
        <div className='app'>
            <h1>MovieSpace</h1>
            <div className='search'>
                <input
                    placeholder='Search for Movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p>Year: {movie.year}</p>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default Search;
