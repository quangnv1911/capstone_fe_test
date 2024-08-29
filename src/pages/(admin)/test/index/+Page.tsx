import { usePageContext } from '#hooks/usePageContext.js'
import { ListTest } from './Test'

export { Page }

function Page() {
  const pageContext = usePageContext()
  const token = pageContext.token || '324324'

  return (
    <>
      <ListTest token={token} />
    </>
  )
}
