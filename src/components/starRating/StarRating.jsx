import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './StarRating.module.css'
import { useSearchParams } from "react-router-dom"


export default function StarRating() {
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const [query, setQuery ] = useSearchParams()
    const vote_average = query.get('vote_average.lte')

    function handleClick({starValue}){

        setRating(starValue)
        setQuery({ 'vote_average.lte' : starValue,
                   'vote_average.gte' : starValue - 2
                })
    }

    useEffect(()=>{
        setRating (vote_average || null)
      },[vote_average])

  return (
    <div  className={ styles.radio }>
        { [...Array(5)].map((star,i)=>{
            
            const starValue = (i + 1) * 2

            return(
                <label key={i} >
                    <input className={ styles.inputRating } type='radio' name='rating' value={starValue}
                        onClick={()=> handleClick( {starValue }) }/>
                    <FaStar size={20}  className={ styles.star } color={ starValue <= (hover || rating) ? 'orange' : 'grey'}
                    onMouseEnter={()=> setHover(starValue) } onMouseLeave={()=> setHover(null) }/>
                </label>
                )
        })}
        
    </div>
  )
}
