import React from 'react'
import HeaderMovies from '../components/headerMovie/HeaderMovies'
import Discover from '../components/discover/Discover'
import { useSearchParams } from "react-router-dom";
import Filter from '../components/filter/Filter';

/**
 * Captures the parameters coming in the url of the other components and renders the main page
 * @returns render the main page of the application
 */

export default function Home() {

  const [query] = useSearchParams()
  const search = query.get('search')
  const vote_average = query.get('vote_average.lte')
  const vote_averageMin = query.get('vote_average.gte')

  return (
    <div>
        <HeaderMovies />
        <Filter />
        <Discover key={vote_average || search } search={ search } vote_average ={vote_average}  vote_averageMin ={vote_averageMin}  />
    </div>
  )
}
