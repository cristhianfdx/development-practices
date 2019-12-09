import Vue from 'vue';
import App from './components/App.vue';

import Boostrap from './assets/styles/bootstrap.min.css';
import Styles from './assets/styles/style.css'

new Vue({
    render: h=> h(App)
}).$mount('#app');