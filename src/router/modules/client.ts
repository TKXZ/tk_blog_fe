import IndexView from '@/views/client/client-index/ClientIndex.vue'
import { RouteRecordRaw } from 'vue-router'

const client: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/client',
    meta: {
      title: 'TK_wang的博客',
    },
    components: {
      client: IndexView,
    },
    children: [
      {
        path: 'client',
        name: 'Client',
        meta: {
          title: '首页',
        },
        components: {
          'client-main': () =>
            import('@/views/client/client-home/ClientHome.vue'),
        },
      },
      {
        path: 'article',
        name: 'Article',
        children: [
          {
            path: 'article/detail/:id',
            name: 'ArticleDetail',
            meta: {
              title: '文章详情',
            },
            components: {
              'client-main': () =>
                import('@/views/client/article-detail/ArticleDetail.vue'),
            },
            beforeEnter: (to, from) => {
              const { id } = to.params
              if (isNaN(+id)) {
                return '/not-found'
              } else {
                return true
              }
            },
          },
        ],
      },
    ],
  },
]

export default client
