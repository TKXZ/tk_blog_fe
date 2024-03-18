import type { RouteRecordRaw } from 'vue-router'

const system: Readonly<RouteRecordRaw[]> = [
  {
    path: '/system',
    name: 'System',
    meta: {
      title: '后台管理',
    },
    components: {
      system: () => import('@/views/system/system-index/SystemIndex.vue'),
    },
  },
]

export default system
