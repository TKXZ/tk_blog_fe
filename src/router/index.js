import { createRouter, createWebHashHistory } from "vue-router";
import routesConfig from './routes.config';
import { closeLoading, openLoading } from "@/utils/loading";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesConfig,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0
      }
    }
  }
})

router.beforeEach((to, from) => {
  openLoading();
})

router.afterEach((to, from) => {
  closeLoading()
})

export default router;