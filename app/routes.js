import VueRouter from 'vue-router'

import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'

let routes = [
  { path: '/', component: LandingPage, name: 'landing' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/login', component: LoginPage, name: 'login' }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router
