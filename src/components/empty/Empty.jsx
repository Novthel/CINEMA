import React from 'react'
import styles from './Empty.module.css'
import { ImSearch } from "react-icons/im"

/**
 * show a message when the search result is negative
 * @returns no result message
 */
export default function Empty() {
  return (
    <div className={ styles.empty }>
        <p>No Results</p>
       { <ImSearch size={90} color={ 'white' } /> }
      
    </div>
  )
}
