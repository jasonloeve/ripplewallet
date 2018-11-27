import '@fortawesome/fontawesome-free';
import 'bulma/css/bulma.css';
import './assets/scss/app.scss';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
