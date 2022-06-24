import React from 'react'
import styles from './Empty.module.css'
import { ImSearch } from "react-icons/im"

export default function Empty() {
  return (
    <div className={ styles.empty }>
        <p>No Results</p>
       { <ImSearch size={90} color={ 'white' } /> }
      
    </div>
  )
}
