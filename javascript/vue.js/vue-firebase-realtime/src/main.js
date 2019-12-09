import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Firebase
import {rtdbPlugin} from 'vuefire';
Vue.use(rtdbPlugin);

// Toastr
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

window.toastr = require('toastr');

Vue.use(VueToastr2);

new Vue({
  render: h => h(App),
}).$mount('#app')
