<template>
    <section class="section section-footer">
        <div class="container is-narrow">
            <h1 class="title">{{ sectionHeading }}</h1>
            <span class="disc">{{ sectionSubHeading }}</span>
            <br>
            <div class="donation-block">
                {{ donationAddress }}
            </div>
            <br>
        </div>
        <div class="container is-narrow">
            {{ copyright }}
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                sectionHeading: 'Donations Welcome',
                sectionSubHeading: 'Help us keep this site alive, If you like what you see or if you\'ve found this site useful then please consider sending us a donation for upkeep.',
                donationAddress: 'XRP Donations - rGiZXoQavp6BJQhJnoXuvWzq4a4B33NWjX',
                copyright: 'Crafted by Algorithm NZ | Secured by Let\'s Encrypt'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .section-footer {
        position: relative;
        overflow: hidden;

        &:after {
            bottom: 0;
            content: '';
            display: block;
            height: 50%;
            left: 0;
            position: absolute;
            right: 0;
            transform: skewY(-1.5deg);
            transform-origin: 100%;
            z-index: -1;
            background: #e2e2e2;
        }

        .donation-block {
            background: #0594ff;
            text-align: center;
            padding: 15px;
            color: #ffffff;
        }
    }
</style>
