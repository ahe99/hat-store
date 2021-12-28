import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Shop from './views/Shop.vue'
import Login from './views/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/shop', name: 'Shop', component: Shop },
    { path: '/login', name: 'Login', component: Login },
    { path: '/*', redirect: '/' }
  ]
})
createApp(App).use(router).use(ElementPlus).use(VueAxios, axios).mount('#app')