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

    // import particles from 'particlesjs'

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
        },
        mounted () {
            require('particles.js');
            this.$nextTick(() => {
                this.initParticlesJS()
            })
        },
        methods: {
            initParticlesJS () {
                /* eslint-disable */
                particlesJS('particles-js', {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 1,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 4
                            },
                            "image": {
                                "src": "",
                                "width": 0,
                                "height": 0
                            }
                        },
                        "opacity": {
                            "value": 0,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 0,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 192.40944730386272,
                            "color": "#ffffff",
                            "opacity": 0.28,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 133.99274002972194,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                })
            }
        }
    }
</script>








<style>

</style>
