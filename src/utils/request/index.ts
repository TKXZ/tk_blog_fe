import instance from './instance'
import { handleRes } from './useResult'

// 默认请求头
const DEFAULT_HEADER_CONFIG = {
  'Content-Type': 'application/json',
}

function get(url: string, params: any = {}, headers: any = {}) {
  return handleRes(
    instance.get(url, {
      method: 'get',
      params,
      headers: { ...DEFAULT_HEADER_CONFIG, headers },
    }),
  )
}

function post(
  url: string,
  data: any = {},
  params: any = {},
  headers: any = {},
) {
  return handleRes(
    instance.post(url, {
      method: 'post',
      data,
      params,
      headers: { ...DEFAULT_HEADER_CONFIG, headers },
    }),
  )
}

export { get, post }
