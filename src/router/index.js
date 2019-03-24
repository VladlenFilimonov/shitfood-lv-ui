import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Learning from '@/components/Learning'
import Learning2 from '@/components/Learning2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/learning1',
      name: 'Learning',
      component: Learning
    },
    {
      path: '/:name',
      name: 'Learning2',
      component: Learning2
    }
  ]
})
