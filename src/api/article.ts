import { get } from '@/utils/request'

const ARTICLE_LIST = '/article/list'
const ARTICLE_DETAIL = '/article/detail' // param: id required

/**
 * 获取文章列表
 * @returns
 */
const getArticleList = (option) => {
  return get(ARTICLE_LIST, option)
}

/**
 * 获取文章详情
 * @param {*} id
 * @returns
 */
const getArticleDetail = (id) => {
  return get(ARTICLE_DETAIL + `/${id}`)
}

export { getArticleList, getArticleDetail }
