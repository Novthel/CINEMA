import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";
import { getImageURL } from '../../utils/GetImageURL';

export default function MovieCard({movie}) {

  const imagenURL = getImageURL(movie.poster_path,200);

  return (
    <li className = {styles.card}>
      <Link to={'/movie/' + movie.id}>
          <img className ={ styles.imgCard} src={ imagenURL } alt={ movie.title } width={200} 
          height={300}/>
      </Link>
       
    </li>
  )
}
