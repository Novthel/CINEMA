
import placeholder from '../Image-not-available.png'

export function getImageURL( path, width ){
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder
}