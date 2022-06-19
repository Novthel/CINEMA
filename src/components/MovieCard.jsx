import React from 'react'

export default function MovieCard({movie}) {

  console.log(movie)
  return (
    <li>
      {movie.title}
    </li>
  )
}
