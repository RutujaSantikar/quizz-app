import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router"
import router from "./router/routes"
import store from './store';




Vue.config.productionTip = false
Vue.use(Router)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
