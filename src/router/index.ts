import { Router, createRouter, createWebHashHistory } from 'vue-router'
import routesConfig from './routes.config'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routesConfig,
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
