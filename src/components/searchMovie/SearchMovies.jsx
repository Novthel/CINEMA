import React, { useState, useEffect } from 'react'
import styles from './SearchMovies.module.css'
import { ImSearch } from "react-icons/im"
import { useSearchParams } from "react-router-dom"


export default function SearchMovies() {

  const [ searchMovie, setSearchMovie ]= useState('')
  const [query, setQuery ] = useSearchParams()
  const search = query.get('search')

  function HandleClick(e){
    e.preventDefault()
    
    setQuery({ search : searchMovie })
  }

  useEffect(()=>{
    setSearchMovie (search || '')
  },[search])


  return (
    <form className={ styles.container } onSubmit ={ HandleClick }>
        <div className={ styles.search}>
          <input className={ styles.searchInput} type='text' placeholder='Search for a movie... ' 
        value={ searchMovie } onChange ={(e)=> { setSearchMovie(e.target.value) }}/>
          <button className={ styles.searchButton } type='submit' > { <ImSearch  size={20}/>} </button>
        </div>

    </form>
  )
}
