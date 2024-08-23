import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import vikeReactQuery from 'vike-react-query/config'
// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  prefetchStaticAssets: 'viewport',
  passToClient: ['pageProps', /* 'urlPathname', */ 'routeParams', 'userName', 'role', 'token'],
  // https://vike.dev/meta
  meta: {
    // Define new setting 'title'
    title: {
      env: { server: true, client: true }
    },
    // Define new setting 'description'
    description: {
      env: { server: true }
    }
  },
  extends: [vikeReact, vikeReactQuery],
  hydrationCanBeAborted: true
} satisfies Config
