import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import routes from '../src/router/routes.js'

import { store } from './store/store'

import '../src/assets/css/global.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  store: store,
  router,
  render: h => h(App),
}).$mount('#app')
