export type Movie = {
  id: string
  title: string
  releaseDate: string
}
export type MovieDetails = Movie & {
  director: string
  producer: string
}
