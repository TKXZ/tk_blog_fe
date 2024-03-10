import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import useDayjs from './useDayjs'

dayjs.extend(relativeTime)

/**
 * 获取相对时间
 * @param {*} date
 * @returns
 */
function useRelativeTime(date: string | Date | number) {
  return useDayjs(date).fromNow()
}

export { useRelativeTime }
