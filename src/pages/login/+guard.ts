// https://vike.dev/guard
import { redirect } from 'vike/abort'
import type { GuardAsync } from 'vike/types'

export { guard }

const guard: GuardAsync = async (pageContext): ReturnType<GuardAsync> => {
  const { token } = pageContext
  if (token !== '' || token !== undefined) {
    throw redirect('/')
  }
}
