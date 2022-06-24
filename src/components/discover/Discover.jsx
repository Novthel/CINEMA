import React, { useEffect, useState} from 'react'
import styles from './Discover.module.css'
import MovieCard from '../movieCard/MovieCard'
import { get } from '../../utils/Api'
import Empty from '../empty/Empty'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from '../spinner/Spinner'

/**
 * Shows the complete list of movies obtained in the api query, uses the scrollinfinite
 * @param {object} props - data captured by useSearchParams()
 * @param {object} props.search - the title of the movie requested by the user comes from the searchMovies component
 * @param {object} props.vote_average - rating data from starRating component
 * @param {object} props.vote_averageMin - minimum data rating from the starRating component
 * @returns list of movies
 */

export default function Discover(props) {

  const [movies, setMovies] = useState([])
  const [ page, setPage ] = useState(1)
  const [ hasMore, setHasMore ] = useState(true)
  const [ isLoading, setIsLoading ] = useState(true)
  const { search, vote_average, vote_averageMin } = props


  useEffect(()=>{
    setIsLoading(true)
    const searchURL = search ? '/search/movie?query=' + search + '&page=' + page  : vote_average ? '/discover/movie?vote_average.gte=' + vote_averageMin
    + '&vote_average.lte=' + vote_average + '&page=' + page : '/discover/movie?page=' + page
    get(searchURL).then(data =>{
      setMovies((prevMovies) =>  prevMovies.concat(data.results));
      setHasMore( data.page < data.total_pages )
      setIsLoading(false)
    })
  },[search, vote_average, vote_averageMin, page])

  if(!isLoading && movies.length === 0){
    return <Empty />
  }

  return (
    <InfiniteScroll dataLength={ movies.length } hasMore = { hasMore } loader = { <Spinner /> } next={ ()=> setPage((prevPag) => prevPag + 1)}>

       <ul className={ styles.grid }>
          { movies.map((movie)=>(
              <MovieCard key={movie.id} movie={ movie } />
          ))}
      </ul>
    </InfiniteScroll>
     
  )
}
