export function throttle(this: any, fn: Function, delay: number = 150) {
  let timer: NodeJS.Timeout | null = null
  const that = this

  return function (...args: any[]) {
    if (timer) {
      return
    } else {
      timer = setInterval(() => {
        fn.apply(that, args)
        if (timer) {
          clearInterval(timer)
          timer = null
        }
      }, delay)
    }
  }
}
