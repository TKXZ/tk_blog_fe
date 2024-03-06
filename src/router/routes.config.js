import MainCpt from '@/views/index/components/MainCpt.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      transition_in: 'animate__fadeInUp'
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
          transition_in: 'animate__fadeInUp'
        },
        component: () => import('@/views/article-detail/ArticleDetail.vue'),
      },
    ]
  }
]

export default routes;