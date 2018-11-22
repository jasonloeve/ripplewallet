import 'bulma/css/bulma.css';
//import $ from "jquery";

import './magic';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');










// import QRCode from 'qrcode-js';
//
// new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");

// const qrcode = new QRCode("qrcode");
//
// $("#text").on("keyup", function () {
//     qrcode.makeCode($(this).val());
// }).keyup().focus();