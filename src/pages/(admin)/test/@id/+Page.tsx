import { usePageContext } from '#hooks/usePageContext.js'

export { Page }

function Page() {
  const pageContext = usePageContext()
  const id = pageContext.routeParams.id
  return (
    <>
      <h1>Test {id}</h1>
    </>
  )
}
