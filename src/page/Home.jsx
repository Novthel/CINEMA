import React from 'react'
import Discover from '../components/Discover'
import HeaderMovies from '../components/HeaderMovies'
import SearchMovies from '../components/SearchMovies'

export default function Home() {
  return (
    <div>
        <SearchMovies />
        <HeaderMovies />
        <Discover />
    </div>
  )
}
