<template>
    <div id="app">
        <SectionHero/>
        <SectionFaq/>
        <SectionStats/>
        <AppFooter/>
    </div>
</template>

<script>
    import SectionHero from './components/SectionHero'
    import SectionFaq from './components/SectionFaq'
    import SectionStats from './components/SectionStats'
    import AppFooter from './components/AppFooter'
    export default {
        name: 'app',
        components: {
            SectionHero,
            SectionFaq,
            SectionStats,
            AppFooter
        }
    }
</script>

<style>
    /*@import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';*/
    /*!*@import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.min.js';*!*/
    /*@import './assets/scss/app.scss';*/
    /*@import 'https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js';*/
</style>
