import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Organization from '@/components/Organization'
import Assessment from '@/components/Assessment'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/assessment',
      name: 'Assessment',
      component: Assessment
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ]
})
