import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './StarRating.module.css'
import { useSearchParams } from "react-router-dom"


/**
 * Allows you to consult movies filtered by rating.
   1 star: movies 0-2 score,
   2 star: movies 2-4 score,
   3 star: movies 4-6 score,
   4 star: movies 6-8 score,
   5 star: movies 8-10 score
 * @returns radio type input element with 5 options (stars)
 */

export default function StarRating() {
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [query, setQuery ] = useSearchParams()
    const vote_average = query.get('vote_average.lte')
    
    function handleClick({starValue}){
      console.log(starValue)
      if(parseInt(rating) === starValue){
        setQuery({})

      }else{
      
        setQuery({ 'vote_average.lte' : starValue,
                   'vote_average.gte' : starValue - 2
                })
      }      
    }

  useEffect(()=>{
        setRating (vote_average)
      },[vote_average]) 

  return (
    <div  className={ styles.radio }>
        { [...Array(5)].map((star,i)=>{
            
            const starValue = (i + 1) * 2

            return(
                <label key={i} >
                    <input className={ styles.inputRating } type='radio' name='rating' value={ starValue }
                        onClick={()=> handleClick( {starValue }) }/>
                    <FaStar className={ styles.star } color={ starValue <= ( rating || hover ) ? 'orange' : 'grey'}
                      onMouseEnter={()=> setHover(starValue) } onMouseLeave={()=> setHover(null) }/>
                </label>
                )
        })}
        
    </div>
  )
}
