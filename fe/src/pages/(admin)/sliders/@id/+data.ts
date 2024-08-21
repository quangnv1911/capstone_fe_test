// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from 'node-fetch'
import type { PageContextServer } from 'vike/types'
import { Slider } from '#src/types/slider.js'

const data = async (pageContext: PageContextServer) => {
  await sleep(300) // Simulate slow network
  const response = await fetch(`http://localhost:8080/sliders/get/${pageContext.routeParams!.id}`, Headers)
  let slider = (await response.json()) as Slider

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  // slider = minimize(slider)

  return {
    slider,
    // The page's <title>
    title: slider.title
  }
}

function minimize(movie: MovieDetails & Record<string, unknown>): MovieDetails {
  const { id, title, release_date, director, producer } = movie
  movie = { id, title, release_date, director, producer }
  return movie
}

function sleep(milliseconds: number) {
  return new Promise((r) => setTimeout(r, milliseconds))
}
