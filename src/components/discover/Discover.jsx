import React, { useEffect, useState} from 'react'
import styles from './Discover.module.css'
import MovieCard from '../movieCard/MovieCard'
import { get } from '../../utils/Api'


export default function Discover({search}) {

  const [movies, setMovies] = useState([])

  useEffect(()=>{

    const searchURL = search ? '/search/movie?query=' + search :'/discover/movie'
    get(searchURL).then(data =>{
      setMovies(data.results)
    })
  },[search])

  return (
    <ul className={ styles.grid }>
        { movies.map((movie)=>(
            <MovieCard key={movie.id} movie={ movie } />
        ))}
    </ul>
  )
}
