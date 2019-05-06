<template>
    <section class="section section-stats">
        <div class="container is-narrow">
            <h1 class="title">{{ sectionHeading }}</h1>
            <span class="disc">{{ sectionSubHeading }}</span>
            <br>
        </div>
        <div class="container is-narrow">
            <div class="columns">
                <div class="column is-8">
                    <div class="ripple-stats">
                        <div class="intrinsic-container">
                            <!--<div-->
                                    <!--class="coinmarketcap-currency-widget"-->
                                    <!--data-currencyid="52"-->
                                    <!--data-base="USD"-->
                                    <!--data-secondary="BTC"-->
                                    <!--data-ticker="true"-->
                                    <!--data-rank="true"-->
                                    <!--data-marketcap="true"-->
                                    <!--data-volume="true"-->
                                    <!--data-stats="USD"-->
                                    <!--data-statsticker="false"-->
                            <!--&gt;</div>-->
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
                bannerAd: 'http://via.placeholder.com/350x430',
                bannerAdLink: 'https://placeholder.com'
            }
        },
        mounted() {
            // let cmcScript = document.createElement('script');
            // cmcScript.setAttribute('src', 'https://files.coinmarketcap.com/static/widget/currency.js');
            // document.head.appendChild(cmcScript)
        },
    }
</script>

<style lang="scss" scoped>
    .section-stats {
        .ripple-stats {
            width: 100%;
            display: block;
            border: 1px solid #cccccc;
            padding: .75em;
            transition: background .3s ease;
            margin-bottom: 8px;
            color: #363636;
            .intrinsic-container {
                position: relative;
                height: 0;
                overflow: hidden;
                padding-bottom: 56.25%;
                iframe {
                    position: absolute;
                    top:0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
