import { renderToStream } from 'react-streaming/server'
import { escapeInject } from 'vike/server'
import { Layout } from '#layouts/Layout.js'
import { getPageTitle } from '#utils/getPageTitle.js'
import { OnRenderHtmlAsync } from 'vike/types'
import React from 'react'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext

  const stream = await renderToStream(
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>,
    // We don't need react-streaming for this app. (We use it merely to showcase that Vike can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true },
  )

  const title = getPageTitle(pageContext)

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
         <meta charset="UTF-8" />
         <meta property="og:title" content="${title}" />
          <title>${title}</title>
      </head>
      <body>
        <div id="react-container">${stream}</div>
      </body>
    </html>`
}
export { onRenderHtml }
