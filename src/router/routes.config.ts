import MainCpt from '@/views/index/components/MainCpt.vue'
import { RouteRecordRaw } from 'vue-router'

const ROUTER_TRANSITION = {
  in: 'animate__fadeInUp', // 注意动画，部分动画可能导致router.scrollBehavior 失效导致滚回顶部
  out: 'animate__slideOutLeft',
}

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: 'TK_wang的博客',
    },
    component: MainCpt,
  },
  {
    path: '/article',
    name: 'Article',
    children: [
      {
        path: '/article/detail/:id',
        name: 'ArticleDetail',
        meta: {
          title: '文章详情',
        },
        component: () => import('@/views/article-detail/ArticleDetail.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/not-found/NotFound.vue'),
  },
]

export default routes
