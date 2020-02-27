import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import firebase from '@/plugins/firebase'

const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/layouts/MainLayout.vue')
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Auth = () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    meth: {
      auth: true,
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

const authState = () => {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      return store.dispatch('fetchUser', user).then(() => {
        resolve()
      })
    })
  })
}

router.beforeEach((to, from, next) => {
  authState()
    .then(() => {
      const isAuthenticated = store.getters.user && store.getters.user.uid
      if (to.name !== 'Auth' && !isAuthenticated) next({ name: 'Auth' })
      else next()
    })
    .catch(e => {
      console.error(e)
    })
})

export default router
