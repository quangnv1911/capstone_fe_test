import type { Config } from 'vike/types'
// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  prefetchStaticAssets: 'viewport',
  passToClient: [
    'pageProps',
    /* 'urlPathname', */ 'routeParams',
    'userName',
    'role',
    'token',
    'dehydratedState',
  ],
  // https://vike.dev/meta
  meta: {
    // Define new setting 'title'
    title: {
      env: { server: true, client: true },
    },
    // Define new setting 'description'
    description: {
      env: { server: true },
    },
    prefetchQuery: {
      env: { server: true, client: true },
    },
    onBeforeRender: {
      // We override Vike's default behavior of always loading/executing onBeforeRender() on the server-side.
      // If we set onBeforeRenderIsomorph to true, then onBeforeRender() is loaded/executed in the browser as well, allowing us to fetch data direcly from the browser upon client-side navigation (without involving our Node.js/Edge server at all).
      env: { server: true, client: true },
    },
  },
  hydrationCanBeAborted: true,
} satisfies Config
