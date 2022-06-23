import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './StarRating.module.css'

export default function StarRating() {
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    

    function handleClick(starValue){
        setRating(starValue)
        console.log(setRating)
    }

  return (
    <div  className={ styles.radio }>
        { [...Array(5)].map((star,i)=>{
            
            const starValue = (i + 1) * 2

            return(
                <label key={i} >
                    <input className={ styles.inputRating } type='radio' name='rating' value={starValue}
                        onClick={()=> handleClick( starValue ) }/>
                    <FaStar size={20}  className={ styles.star } color={ starValue <= (hover || rating) ? 'orange' : 'grey'}
                    onMouseEnter={()=> setHover(starValue) } onMouseLeave={()=> setHover(null) }/>
                </label>
                )
        })}
        
    </div>
  )
}
