<template>
    <section class="section hero" id="particles-js">

        <!--<img alt="Vue logo" src="./assets/images/logo.png">-->
        <!--onload="generate()"-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <div class="float-content">
            <div class="container is-narrow">
                <h1 class="title">{{ sectionHeading }}</h1>
                <span class="disc">{{ sectionSubHeading }}</span>
                <br>
                <div class="wallet-card" id="paper">
                    <!-- ======================= -->
                    <!-- Where the magic happens -->
                    <!-- ======================= -->
                    <div id="left">
                        <span>Ripple Address</span>
                        <div id="qraddr" class="qr"></div>
                    </div>
                    <div id="address"><span id="addrtext"></span></div>
                    <div id="void"></div>
                    <div id="secret"><span id="secrtext"></span></div>
                    <div id="right">
                        <span>Secret Key - Keep Safe</span>
                        <div id="qrsecr" class="qr"></div>
                    </div>
                    <div class="wallet-info">
                        <div class="wallet-copy">
                            All you need to know about Ripple paper wallets, Crypto currency security and how to restore your funds to start trading.
                        </div>
                        <div class="wallet-logo">
                            <img class="logo initial_logo" src="https://ripple.com/wp-content/themes/ripple-beta/assets/img/logo/ripple-logo-white.png">
                        </div>
                    </div>
                    <!-- ======================= -->
                    <!-- Where the magic happens -->
                    <!-- ======================= -->
                </div>
                <br><br>
                <div class="button-holder has-text-centered">
                    <button class="button is-primary is-medium" onclick="generate()" title="Generate new">Generate XRP Wallet &nbsp;<i class="fa fa-credit-card" aria-hidden="true"></i></button> &nbsp;<button class="button is-primary is-medium" onclick="window.print()" title="Print">Print XRP Wallet &nbsp;<i class="fa fa-print" aria-hidden="true"></i></button>
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
                sectionHeading: 'Generate A Ripple Paper Wallet',
                sectionSubHeading: 'Create your own Ripple paper wallet for safe long-term storage of your investment.',
                statsDataApi: 'https://api.ripplewallet.tech/',
                bannerAd: 'http://via.placeholder.com/350x500',
                bannerAdLink: 'https://placeholder.com'
            }
        }
    }
</script>

<style>

</style>
