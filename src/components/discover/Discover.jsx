import React, { useEffect, useState} from 'react'
import styles from './Discover.module.css'
import MovieCard from '../movieCard/MovieCard'
import { get } from '../../utils/Api'


export default function Discover(props) {

  const [movies, setMovies] = useState([])
  const { search, vote_average, vote_averageMin } = props

  useEffect(()=>{

    const searchURL = search ? '/search/movie?query=' + search : vote_average ? '/discover/movie?vote_average.gte=' + vote_averageMin
    + '&vote_average.lte=' + vote_average : '/discover/movie'
    get(searchURL).then(data =>{
      setMovies(data.results)
    })
  },[search, vote_average, vote_averageMin])

  return (
    <ul className={ styles.grid }>
        { movies.map((movie)=>(
            <MovieCard key={movie.id} movie={ movie } />
        ))}
    </ul>
  )
}
