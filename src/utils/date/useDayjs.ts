import * as dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'
// import 'dayjs/locale/zh-hk';
// import 'dayjs/locale/zh-tw';

dayjs.locale('zh-cn')

function useDayjs(date: string | Date | number) {
  return dayjs(date)
}

export default useDayjs
