import { createMessage } from '../message'

/**
 * 接口数据 属性定义
 */
const resRoleConfig = {
  resErrSignName: 'errno',
  resDataName: 'data',
  resMsgName: 'message',
}

/**
 * 处理结果
 * @param {*} resPromise
 * @returns
 */
function handleRes(resPromise: Promise<any>): Promise<any> {
  return resPromise
    .then((response) => {
      const res = response.data
      if (res[resRoleConfig.resErrSignName] !== 0) {
        throw new Error('获取资源错误')
      }
      return res[resRoleConfig.resDataName]
    })
    .catch((error) => {
      createMessage('error', error.message)
    })
}

export { handleRes }
