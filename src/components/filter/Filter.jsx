import React from 'react'
import StarRating from '../starRating/StarRating'
import styles from './Filter.module.css'

export default function Filter() {
  return (
    <div className={ styles.filter}>
        <div className={ styles.TextRating}><span> Rating </span> </div>
        <div className={ styles.starRating}><StarRating /> </div>
    
    </div>
  )
}
