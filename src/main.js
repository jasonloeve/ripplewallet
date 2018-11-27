import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free';
//import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
import './assets/scss/app.scss';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
