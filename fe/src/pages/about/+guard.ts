// https://vike.dev/guard
export { guard }

import { redirect, render } from 'vike/abort'
import type { GuardAsync } from 'vike/types'

const guard: GuardAsync = async (pageContext): ReturnType<GuardAsync> => {
  const { token, role } = pageContext
  if (token === '') {
    throw redirect('/login')
  }
  if (role !== 'ADMIN') {
    throw render(403, 'Only admins are allowed to access this page.')
  }
}
