import { Router, createRouter, createWebHashHistory } from 'vue-router'
import routesConfig from './routes.config'
import { closeLoading, openLoading } from '@/utils/loading'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routesConfig,
  scrollBehavior: (to, from, savedPosition) => {
    setTimeout(() => {
      if (savedPosition) {
        return savedPosition
      }
    }, 300)
  },
})

/**
 * 更改网页标题
 * @param {*} title
 */
const changeTitle = (title: string) => {
  document.title = title
}

router.beforeEach(() => {
  openLoading()
})

router.afterEach((to) => {
  const meta = to.meta
  closeLoading()
  if (meta) {
    const { title } = meta
    if (title) {
      changeTitle(title as string)
    }
  }
})

export default router
