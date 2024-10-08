// https://vike.dev/onPageTransitionEnd
import type { OnPageTransitionEndAsync } from 'vike/types'

export { onPageTransitionEnd }

const onPageTransitionEnd: OnPageTransitionEndAsync =
  async (): ReturnType<OnPageTransitionEndAsync> => {
    document.querySelector('body')!.classList.remove('page-is-transitioning')
  }
