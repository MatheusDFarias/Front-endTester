import './css/app.css'
import Vue from 'vue'
import  store from  './js/store'
import  router from  './js/route'
import App from './components/index'
Vue.component('list', require('./components/list.vue').default)
Vue.component('edit', require('./components/edit.vue').default)
Vue.component('create', require('./components/create.vue').default)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')