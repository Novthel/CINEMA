import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../components/DetailsMovie.module.css';
import { get } from '../utils/Api';

export default function DetailsMovie() {

  const { id } = useParams(); 
  const [ movie, setMovie ] = useState(null);
  
  useEffect(()=>{
    
    const searchURL = '/movie/' + id
    get(searchURL).then(data =>{
      setMovie(data)
    })
  })

  if (!movie) {
    return null
  }

   const imagenURL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  return (
    <div className={ styles.movDetails }>
        <img className={ styles.imgDetails } src={ imagenURL } alt={movie.id} />
        <div className={ styles.details }>
            <h3><strong> { movie.title } </strong> </h3>
            <p><strong>Description: </strong></p> 
            <p>{ movie.overview }</p>
            <p><strong>Genres:  </strong> { movie.genres.map((gen)=> gen.name).join(' , ')}</p>
            <p></p>

        </div>
    </div>
  )
}
