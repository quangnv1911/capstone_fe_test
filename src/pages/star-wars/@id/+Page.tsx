import { useData } from '#src/hooks/useData.js'
import type { Data } from './+data'

export { Page }

function Page() {
  const { movie } = useData<Data>()
  return (
    <>
      <h1>{movie.title}</h1>
      Release Date: {movie.releaseDate}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
    </>
  )
}
