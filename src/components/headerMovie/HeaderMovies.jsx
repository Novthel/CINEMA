import React from 'react';
import styles from './HeaderMovies.module.css';
import cinema from '../../cinema.jpg';
import SearchMovies from '../searchMovie/SearchMovies';


export default function HeaderMovies() {
  return (
    <div className={ styles.container }>
       <img className={ styles.principalImg } src={ cinema } alt={ cinema }/>
       <div className={ styles.title }>
          <h2>Your Favourite movies. Explained </h2>
          <h4>Figure out what happened. Then find out why.</h4>
       </div>
       <SearchMovies />
       
    </div>
  )
}
