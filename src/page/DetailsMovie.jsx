import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../components/details/DetailsMovie.module.css'
import { get } from '../utils/Api'
import { getImageURL } from '../utils/GetImageURL'
import Spinner from '../components/spinner/Spinner'

/**
 * displays a detailed view, displaying more information about the
   movie. capture the id of the movie using the useParams() hook
 * @param {string} movie.movie.poster_path - movie image 
 * @param {string} movie.title - Movie title
 * @param {Number} movie.vote_average - movie rating
 * @param {string} movie.overview - Movie description
 * @param {object} movie.genres - movie genres
   @returns render the page showing the most important data of the movie
 */

export default function DetailsMovie() {

  const { id } = useParams(); 
  const [ movie, setMovie ] = useState(null);
  
  useEffect(()=>{
    const searchURL = '/movie/' + id
    get(searchURL).then(data =>{
      setMovie(data)
    })
  },[id])

  if (!movie) {
    return <Spinner/>
  }
  console.log(movie)
  const vote = Math.trunc(movie.vote_average * 10)


  const imagenURL = getImageURL( movie.poster_path, 300);
  const tapizURL = getImageURL( movie.backdrop_path , 1280);
  return (
    <div className={ styles.movieContainer} style={ {backgroundImage: `url( ${ tapizURL })`} } >
       <div className={ styles.movDetails }>
          <div >
            <img className={ styles.imgDetails } src={ imagenURL } alt={movie.id} />
          </div>
          <div className={ styles.details }>
            <h3><strong> { movie.title } </strong> </h3>
            <p>{ movie.overview }</p>
            <p><strong>Genres:  </strong> { movie.genres.map((gen)=> gen.name).join(' , ')}</p>
            <p><strong>Score:  </strong> { vote }%</p>  
       </div>
       
      </div>
    </div>
   
  )
}
