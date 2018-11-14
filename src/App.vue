<template>
    <div id="app">

        <!--<img alt="Vue logo" src="./assets/images/logo.png">-->
        <!--onload="generate()"-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <SectionHero></SectionHero>
        <SectionStats></SectionStats>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import SectionHero from './components/SectionHero.vue'
    import SectionStats from './components/SectionStats.vue'
    import AppFooter from './components/AppFooter.vue'

    export default {
        name: 'app',
        components: {
            SectionHero,
            SectionStats,
            AppFooter
            //HelloWorld
        }
    }
</script>

<style>
    /*https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.min.js*/
    @import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
    @import './assets/scss/app.scss';
</style>
