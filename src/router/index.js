import { createRouter, createWebHashHistory } from "vue-router";
import routesConfig from './routes.config';

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesConfig,
})

export default router;