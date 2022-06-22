import React from 'react';
import styles from './HeaderMovies.module.css';
import cinema from '../../cinema.jpg';
import SearchMovies from '../searchMovie/SearchMovies';


export default function HeaderMovies() {
  return (
    <div className={ styles.container }>
       <img className={ styles.principalImg } src={ cinema } alt={ cinema }/>
       <SearchMovies />
    </div>
  )
}
