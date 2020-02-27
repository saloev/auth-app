import Vue from 'vue'
import VueRouter from 'vue-router'

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

router.beforeEach((to, from, next) => {
  const isAuthenticated = true;
  if (to.name !== 'Auth' && !isAuthenticated) next({ name: 'Auth' })
  else next()
})

export default router
