export function debounce(this: any, fn, delay = 500) {
  let timer: NodeJS.Timeout | null = null
  const that = this

  return function (...args: any[]) {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        fn.apply(that, args)
        timer = null
      }, delay)
    }
  }
}
