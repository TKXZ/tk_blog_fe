import { App, createApp, createVNode } from 'vue'
import VueApp from './App.vue'

// 样式重置
import '@/assets/style/reset.scss'
import '@/assets/style/media/index.scss'
import 'animate.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import * as Icons from '@element-plus/icons-vue'

import pinia from '@/store'

// 路由
import router from '@/router'

const app: App = createApp(VueApp)
app.use(router)
app.use(pinia)

// 注册自定义 Icon 组件
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}
app.component('Icon', Icon)

app.mount('#app')
