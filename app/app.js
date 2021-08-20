import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import vuetify from './src/plugins/vuetify'
import router from './routes.js'

import MainLayout from "./layouts/MainLayout";

Vue.prototype.axios = axios
Vue.use(VueRouter)

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found')
}

Vue.component("main-layout", MainLayout)

const app = new Vue({
  el: '#app',
  router,
  vuetify,
  data: () => ({})
})
