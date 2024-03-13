import { MyEach } from './@types'

export const myEach: MyEach = (queue, cb) => {
  let next: any = { done: false }
  const iT = queue[Symbol.iterator]()
  while (!next.done) {
    next = iT.next()
    !next.done && cb(next.value)
  }
}
