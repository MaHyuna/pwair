import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material' 
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);   // 라우터를 사용하겠다고 설정
Vue.use(VueMaterial);  // 머터리얼 프레임워크 사용하려고

const router = new VueRouter({  // 라우터 설정
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
