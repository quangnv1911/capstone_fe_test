// https://vike.dev/guard
export { guard }

import { redirect, render } from 'vike/abort'
import type { GuardAsync } from 'vike/types'

const guard: GuardAsync = async (pageContext): ReturnType<GuardAsync> => {
  const { token} = pageContext
  if (token !== '') {
    throw redirect('/')
  }


}
