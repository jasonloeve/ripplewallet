<template>
  <div id="app">
    <Hero />
    <Info/>
    <Stats/>
    <Footer/>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Info from './components/Info'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Hero,
    Info,
    Stats,
    Footer
  }
}
</script>

<style>
/*@import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';*/
/*!*@import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.min.js';*!*/
/*@import './assets/scss/app.scss';*/
/*@import 'https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js';*/
</style>
