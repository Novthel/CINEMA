import React from 'react'
import HeaderMovies from '../components/headerMovie/HeaderMovies'
import Discover from '../components/discover/Discover'
import { useSearchParams } from "react-router-dom";

export default function Home() {

  const [query] = useSearchParams()
  const search = query.get('search')

  return (
    <div>
        <HeaderMovies />
        <Discover search={ search }/>
    </div>
  )
}
