<template>
    <section class="section">
        <div class="container is-narrow">
            <h1 class="title">{{ sectionHeading }}</h1>
            <span class="disc">{{ sectionSubHeading }}</span>
            <br><br>
        </div>
        <div class="container is-narrow">
            <div class="columns">
                <div class="column is-8">
                    <div class="ripple-stats">
                        <div class="intrinsic-container">
                            <iframe v-bind:src=statsDataApi allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <a v-bind:href="bannerAdLink">
                        <img v-bind:src=bannerAd>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionStats',
        data () {
            return {
                sectionHeading: 'Ripple Current Stats',
                sectionSubHeading: 'XRP current stats and forecast.',
                statsDataApi: 'https://api.ripplewallet.tech/',
                bannerAd: 'http://via.placeholder.com/350x500',
                bannerAdLink: 'https://placeholder.com'
            }
        }
    }
</script>

<style>
    .intrinsic-container {
        position: relative;
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
    }
    .intrinsic-container iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
