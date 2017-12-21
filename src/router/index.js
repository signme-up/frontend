import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import newEvent from '@/components/newEvent'
import guest from '@/components/guest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
  },
  {
    path: '/event',
    name: 'newEvent',
    component: newEvent
  },
  {
    path: '/guest',
    name: 'guest',
    component: guest
  },
  
  ],
  mode : "history"

})
