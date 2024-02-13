import MainCpt from '@/views/index/components/MainCpt.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: MainCpt,
  },
  {
    path: '/article',
    name: 'Article',
    children: [
      {
        path: '/article/detail/:id',
        name: 'ArticleDetail',
        component: () => import('@/views/article-detail/ArticleDetail.vue'),
      },
    ]
  }
]

export default routes;