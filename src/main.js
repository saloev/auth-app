import firebase from '@/plugins/firebase';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import './scss/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$firebase = firebase;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
