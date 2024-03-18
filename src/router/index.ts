import { Router, createRouter, createWebHashHistory } from 'vue-router'
import routesClient from './modules/client'
import routesManageSystem from './modules/manage-system'
import routesNotFound from './modules/not-found'

const routes = [...routesClient, ...routesManageSystem, ...routesNotFound]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return {
        top: 0,
      }
    }
  },
})

/**
 * 更改网页标题
 * @param {*} title
 */
const changeTitle = (title: string) => {
  document.title = title
}

router.afterEach((to) => {
  const meta = to.meta
  if (meta) {
    const { title } = meta
    if (title) {
      changeTitle(title as string)
    }
  }
})

export default router
