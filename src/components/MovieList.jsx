import React from 'react';
import movies from '../movies.json';
import MovieCard from './MovieCard';

function MovieList() {
  return (

    <ul>
        { movies.map((movie)=>(
            <MovieCard key={movie.id} movie={ movie } />
        ))}
    </ul>
  )
}

export default MovieList

