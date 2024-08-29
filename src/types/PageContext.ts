import type { DehydratedState, FetchQueryOptions } from '@tanstack/react-query'

type Page = (pageProps: PageProps) => React.ReactElement
type PageProps = Record<string, unknown>
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProps
      userName?: string
      role?: string
      token?: string
      data?: {
        /** Value for <title> defined dynmically by by /pages/some-page/+data.js */
        title?: string
        /** Value for <meta name="description"> defined dynmically */
        description?: string
      }
      config: {
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string
        /** Value for <meta name="description"> defined statically */
        description?: string
        prefetchQuery: FetchQueryOptions
      }
      /** https://vike.dev/render */
      abortReason?: string
      dehydratedState: DehydratedState
    }
  }
}

// Tell TypeScript this file isn't an ambient module
export {}
