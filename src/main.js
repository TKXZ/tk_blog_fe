import { createApp } from 'vue'
import App from './App.vue'

// 样式重置
import '@/assets/style/reset.scss';


// 路由
import router from '@/router';


const app = createApp(App)
app.use(router);


app.mount('#app')

