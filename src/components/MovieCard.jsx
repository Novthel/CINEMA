import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";

export default function MovieCard({movie}) {

  const imagenURL = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;

  return (
    <li className = {styles.card}>
      <Link to={'/movie/' + movie.id}>
          <img className ={ styles.imgCard} src={ imagenURL } alt={ movie.title } width={200} 
          height={300}/>
      </Link>
       
    </li>
  )
}
