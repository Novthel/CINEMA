import React, { useEffect, useState} from 'react';
import styles from './Discover.module.css';
import MovieCard from './MovieCard';
import { get } from '../utils/Api';

export default function Discover() {

  const [movies, setMovies] = useState([])

  useEffect(()=>{

    const searchURL = '/discover/movie'
    get(searchURL).then(data =>{
      setMovies(data.results)
    })
  })

  return (
    <ul className={ styles.grid }>
        { movies.map((movie)=>(
            <MovieCard key={movie.id} movie={ movie } />
        ))}
    </ul>
  )
}
