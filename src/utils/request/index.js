import instance from './instance';
import { handleRes } from './useResult';

// 默认请求头
const DEFAULT_HEADER_CONFIG = {
  "Content-Type": "application/json",
}

function get(url, params = {}, headers = {}) {
  return handleRes(instance.get(url, {
    method: 'get',
    params,
    headers: { ...DEFAULT_HEADER_CONFIG, headers },
  }))
}

function post(url, data = {}, params = {}, headers = {}) {
  return handleRes(instance.post(url, {
    method: 'post',
    data,
    params,
    headers: { ...DEFAULT_HEADER_CONFIG, headers },
  }))
}

export {
  get, post,
}