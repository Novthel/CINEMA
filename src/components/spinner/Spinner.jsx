import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import styles from './Spinner.module.css'

/**
 * Displays the loading status of the page or section of a page using an animated graphic
 * @returns element spinner
 */

export default function Spinner() {
  return (
    <div className={styles.spinner}>
        <FaSpinner size={50} className= {styles.spinning} color={'white'} />
    </div>
  )
}
