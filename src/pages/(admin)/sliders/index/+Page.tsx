/* eslint-disable react/react-in-jsx-scope */
export default Page

import { useData } from '#src/hooks/useData.js'
import { useEffect, useState } from 'react'
import type { Data } from './+data'
import { Slider } from '#src/types/slider.js'
import Loading from '#components/common/Loading.js'
import agent from '#utils/axios.js'
import { usePageContext } from '#hooks/usePageContext.js'
import { toast } from 'react-toastify'

function Page() {
  const [sliders, setSlider] = useState<Slider[]>()
  const pageContext = usePageContext()
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await agent.Slide.list(pageContext.token)
        if (!response.ok) {
          toast.error('fail')
        }
        const data = await response.json()
        toast.success('Thanh cong')
        setSlider(data)
      } catch (error) {
        toast.error('fetch')
      }
    }
    fetchSliders()
  }, [])
  if (sliders) {
    return <Loading />
  }
  return (
    <>
      <h1>Star Wars Movies</h1>
      <ol>
        {sliders?.map((slider: Slider) => (
          <li key={slider.slider_id}>
            <a href={`/slider/${slider.slider_id}`}>{slider.title}</a>
          </li>
        ))}
      </ol>
      <p>
        Source: <a href='https://brillout.github.io/star-wars/'>brillout.github.io/star-wars</a>.
      </p>
      <p>
        Data can be fetched by using the <code>data()</code> hook.
      </p>
    </>
  )
}
