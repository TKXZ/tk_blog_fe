import { createRouter, createWebHashHistory } from "vue-router";
import routesConfig from './routes.config';
import { closeLoading, openLoading } from "@/utils/loading";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesConfig,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
  }
})

/**
 * 更改网页标题
 * @param {*} title 
 */
const changeTitle = (title) => {
  document.title = title;
}

router.beforeEach(() => {
  openLoading();
})

router.afterEach((to) => {
  const meta = to.meta;
  closeLoading();
  if (meta) {
    const { title } = meta;
    if (title) {
      changeTitle(title)
    }
  }
})

export default router;