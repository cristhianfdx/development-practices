// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Users from './components/User.vue';
import Test from './components/Test.vue';

const router = new VueRouter({
    mode: 'history', 
    base: __dirname,
    routes: [

      {
        path :'/',
        component:Users
      },

      {
        path :'/test',
        component: Test
      },
      
    ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount("#app")
