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
    path: '/event',
    name: 'newEvent',
    component: newEvent,
    beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        }else {
            swal({
                title: 'Ooops',
                text: `You don't Have Access! `,
                icon: 'error',
                button: 'OK'
            })
            next('/')
        }
    }
  },
  {
    path: '/event/:eventId',
    name: 'guest',
    component: guest,
    beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        }else {
            this.$swal({
                title: 'Ooops',
                text: `You don't Have Access! `,
                icon: 'error',
                button: 'OK'
            })
            next('/')
        }
    }
  },
  
  ],
  mode : "history"

})
