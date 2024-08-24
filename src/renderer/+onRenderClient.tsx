/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable space-before-function-paren */
// eslint-disable-next-line @eslint-community/eslint-comments/no-duplicate-disable
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @eslint-community/eslint-comments/no-duplicate-disable */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable semi */
/* eslint-disable import/first */
// /* eslint-disable import/first */
// // https://vike.dev/onRenderClient
// export { onRenderClient }

// import ReactDOM from 'react-dom/client'
// import { Layout } from '#layouts/Layout' 
// import { getPageTitle } from '#utils/getPageTitle' 
// import type { OnRenderClientAsync } from 'vike/types'

// let root: ReactDOM.Root
// const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
//   const { Page } = pageContext

//   // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
//   // to support SPA
//   if (!Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined')

//   const container = document.getElementById('react-root')
//   if (!container) throw new Error('DOM element #react-root not found')

//   const page = (
//     <Layout pageContext={pageContext}>
//       <Page />
//     </Layout>
//   )
//   if (pageContext.isHydration) {
//     root = ReactDOM.hydrateRoot(container, page)
//   } else {
//     if (!root) {
//       root = ReactDOM.createRoot(container)
//     }
//     root.render(page)
//   }
//   document.title = getPageTitle(pageContext)
// }

// https://vike.dev/onRenderClient
export { onRenderClient }

import ReactDOM from 'react-dom/client'
import { Layout } from '#layouts/Layout.js'
import { getPageTitle } from '#utils/getPageTitle.js'
import type { OnRenderClientAsync } from 'vike/types'

let root: ReactDOM.Root
const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  const page = (
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  )
  const container = document.getElementById('react-container')!
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
  document.title = getPageTitle(pageContext)
}