
import placeholder from '../media/Image-not-available.png'

export function getImageURL( path, width ){
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder
}