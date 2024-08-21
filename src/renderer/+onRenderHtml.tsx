/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/first */
// /* eslint-disable import/order */
// /* eslint-disable import/first */
// /* eslint-disable no-use-before-define */
// // https://vike.dev/onRenderHtml
// export { onRenderHtml }

// import ReactDOMServer from 'react-dom/server'
// import { Layout } from '#layouts/Layout'
// import { escapeInject, dangerouslySkipEscape } from 'vike/server'
// import logoUrl from '#assets/img/logo.svg'
// import type { OnRenderHtmlAsync } from 'vike/types'
// import { getPageTitle } from '#utils/getPageTitle'
// import { META } from '#utils/'
// const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
//   const { Page } = pageContext

//   // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
//   // onRenderHtml() to support SPA
//   if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined')

//   // Alternativly, we can use an HTML stream, see https://vike.dev/streaming
//   const pageHtml = ReactDOMServer.renderToString(
//     <Layout pageContext={pageContext}>
//       <Page />
//     </Layout>
//   )

//   const title = getPageTitle(pageContext)
//   const description = pageContext.data?.description || pageContext.config.description || 'Demo of using Vike'

//   const documentHtml = escapeInject`<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <link rel="icon" href="${logoUrl}" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="${description}" />
//         <meta name="author" content="${META.DEFAULT_AUTHOR}">
//         <meta property="og:title" content="${title}" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="${META.BASE_URL}" />
//         <meta property="og:description" content="${description}" />
//         <meta property="og:image" content="${META.BASE_URL}${logoUrl}" />
//         <meta property="og:image:alt" content="${title}" />
//         <meta property="og:image:width" content="1200"/>
//         <meta property="og:image:height" content="601"/>
//         <meta name="twitter:card" content="summary_large_image" />
//         <!--<meta name="twitter:site" content="@YourTwitterUsername" />-->
//         <meta name="twitter:title" content="${title}" />
//         <meta name="twitter:text:title" content="${title}" />
//         <meta name="twitter:description" content="${description}" />
//         <meta name="twitter:image:alt" content="${title}" />
//         <title>${title}</title>
//       </head>
//       <body>
//         <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
//       </body>
//     </html>`

//   return {
//     documentHtml,
//     pageContext: {
//       // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
//     }
//   }
// }

// https://vike.dev/onRenderHtml
export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { Layout } from '#layouts/Layout.js'
import { getPageTitle } from '#utils/getPageTitle.js'

function onRenderHtml(pageContext: any) {
  let pageHtml
  if (!pageContext.Page) {
    // SPA
    pageHtml = ''
  } else {
    // SSR / HTML-only
    const { Page, pageProps } = pageContext
    pageHtml = ReactDOMServer.renderToString(
      <Layout pageContext={pageContext}>
        <Page {...pageProps} />
      </Layout>,
    )
  }

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
         <meta charset="UTF-8" />
         <meta property="og:title" content="${getPageTitle(pageContext)}" />
          <title>${getPageTitle(pageContext)}</title>
      </head>
      <body>
        <div id="react-container">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
