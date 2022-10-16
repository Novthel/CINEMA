import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";
import { getImageURL } from '../../utils/GetImageURL';

/**
 * Card of a movie with your data
 * @param {object} movie -properties of a film
 * @param {string} movie.movie.poster_path - movie image 
 * @param {string} movie.title - Movie title
 * @param {Number} movie.vote_average - movie rating
 * @returns  render card with image and movie score
 */

export default function MovieCard({movie}) {
 
  const imagenURL = getImageURL(movie.poster_path,300);

  return (
    <li className = {styles.card}>
      <Link to={'/movie/' + movie.id}>
          <img className ={ styles.imgCard} src={ imagenURL } alt={ movie.title } width={300} 
          height={300}/>
          <div className = {styles.vote_average}>
          <p>{ movie.vote_average * 10 }%</p>
          </div>
      </Link>
       
    </li>
  )
}
