import axios from 'axios';

const BASE_URL = 'https://mock.apifox.com/m1/4018275-0-default';

/**
 * 处理 http 状态码
 * @param {*} code 
 * @returns 
 */
function useHttpStatusCode(code) {
  if ((code >= 200 && code < 300) || (code === 304)) {
    return true;
  } else if (code >= 400 && code < 500) {
    throw new Error('客户端请求错误');
  } else if (code >= 500) {
    throw new Error('服务端响应错误')
  }
}

/**
 * axios 实例
 */
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  validateStatus: useHttpStatusCode,
})

export default instance;