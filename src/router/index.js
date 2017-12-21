import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Organization from '@/components/Organization'
import Assessment from '@/components/Assessment'
import AssessmentInstructions from '@/components/AssessmentInstructions'
import AssessmentFacts from '@/components/AssessmentFacts'
import AssessmentAspects from '@/components/AssessmentAspects'
import AssessmentResults from '@/components/AssessmentResults'
import Matrix from '@/components/Matrix'

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
      component: Assessment,
      children: [
        {
          path: '',
          name: 'AssessmentInstructions',
          component: AssessmentInstructions
        },
        {
          path: 'facts/:slug',
          name: 'AssessmentFacts',
          component: AssessmentFacts
        },
        {
          path: 'aspects/:slug',
          name: 'AssessmentAspects',
          component: AssessmentAspects
        },
        {
          path: 'results',
          name: 'AssessmentResults',
          component: AssessmentResults
        }
      ]
    },
    {
      path: '/matrix',
      name: 'Matrix',
      component: Matrix
    }
  ]
})
