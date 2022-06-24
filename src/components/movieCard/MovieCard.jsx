import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";
import { getImageURL } from '../../utils/GetImageURL';
import { FaStar } from 'react-icons/fa'

export default function MovieCard({movie}) {

  const imagenURL = getImageURL(movie.poster_path,200);

  return (
    <li className = {styles.card}>
      <Link to={'/movie/' + movie.id}>
          <img className ={ styles.imgCard} src={ imagenURL } alt={ movie.title } width={200} 
          height={300}/>
          <div className = {styles.vote_average}>
              <p>{ movie.vote_average } <FaStar /></p>
          </div>
      </Link>
       
    </li>
  )
}
