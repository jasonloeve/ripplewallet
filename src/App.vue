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

<style lang="scss">

</style>
