import { App, createApp } from 'vue'
import VueApp from './App.vue'

// 样式重置
import '@/assets/style/reset.scss'
import '@/assets/style/media/index.scss'
import 'animate.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import pinia from '@/store'

// 路由
import router from '@/router'

const app: App = createApp(VueApp)
app.use(router)
app.use(pinia)

app.mount('#app')
