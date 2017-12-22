// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import swal from 'sweetalert'

const my_axios = axios.create({
    baseURL:'http://api.signmeup.ga/api',
    headers:{
        Authorization: "Bearer " + localStorage.getItem('token')
    }
})

const swalPlugin={}
swalPlugin.install = (Vue) => {
  Vue.prototype.$swal = swal
}
Vue.use(swalPlugin)




Vue.prototype.$http = my_axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
