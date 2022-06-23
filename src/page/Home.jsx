import React from 'react'
import HeaderMovies from '../components/headerMovie/HeaderMovies'
import Discover from '../components/discover/Discover'
import { useSearchParams } from "react-router-dom";
import Filter from '../components/filter/Filter';

export default function Home() {

  const [query] = useSearchParams()
  const search = query.get('search')
  const vote_average = query.get('vote_average.lte')
  const vote_averageMin = query.get('vote_average.gte')

  return (
    <div>
        <HeaderMovies />
        <Filter />
        <Discover search={ search } vote_average ={vote_average}  vote_averageMin ={vote_averageMin}  />
    </div>
  )
}
