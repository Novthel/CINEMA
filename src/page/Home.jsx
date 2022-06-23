import React from 'react'
import HeaderMovies from '../components/headerMovie/HeaderMovies'
import Discover from '../components/discover/Discover'
import { useSearchParams } from "react-router-dom";
import Filter from '../components/filter/Filter';

export default function Home() {

  const [query] = useSearchParams()
  const search = query.get('search')

  return (
    <div>
        <HeaderMovies />
        <Filter />
        <Discover search={ search }/>
    </div>
  )
}
