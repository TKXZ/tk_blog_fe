import { createApp } from 'vue'
import App from './App.vue'

// 样式重置
import '@/assets/style/reset.scss';
import '@/assets/style/media/index.scss'
import 'animate.css'
import 'element-plus/theme-chalk/dark/css-vars.css'


// 路由
import router from '@/router';


const app = createApp(App)
app.use(router);


app.mount('#app')

