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
        name: 'AppFooter',
        data () {
            return {
                sectionHeading: 'Donations Welcome',
                sectionSubHeading: 'Help us keep this site alive, If you like what you see or if you\'ve found this site useful then please consider sending us a donation for upkeep.',
                donationAddress: 'XRP Donations - rGiZXoQavp6BJQhJnoXuvWzq4a4B33NWjX',
                copyright: 'Dev by Algorithm NZ | Terms of Use | Copyright in Code | Secured By Let\'s Encrypt'
            }
        }
    }
</script>

<style>

</style>
