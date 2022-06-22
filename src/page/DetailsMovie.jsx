import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../components/details/DetailsMovie.module.css'
import { get } from '../utils/Api'
import { getImageURL } from '../utils/GetImageURL'


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
    return null
  }

   const imagenURL = getImageURL( movie.poster_path, 500);;

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
