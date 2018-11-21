<template>
    <section class="section">
        <div class="container is-narrow">
            <h1 class="title">{{ sectionHeading }}</h1>
            <span class="disc">{{ sectionSubHeading }}</span>
            <br>
            <ul class="accordion">
                <li v-for="faq in faqs" v-bind:key="faq.id">
                    <a class="toggle" @click="toggle">{{ faq.faqQuestion }}</a>
                    <ul class="inner">
                        {{ faq.faqAnswer }}
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import JQuery from 'jquery';
    let $ = JQuery;

    export default {
        name: 'SectionFaq',
        data () {
            return {
                sectionHeading: 'Wallet FAQ\'s',
                sectionSubHeading: 'All you need to know about Ripple paper wallets, Crypto currency security and how to restore your funds to start trading.',
                faqs: [
                    {
                        faqId: '0',
                        faqQuestion: 'What are the benifits of a Ripple paper wallet?',
                        faqAnswer: 'Coming soon!',
                    },
                    {
                        faqId: '1',
                        faqQuestion: 'Is my Ripple safe in a XRP paper wallet?',
                        faqAnswer: 'Coming soon!',
                    },
                    {
                        faqId: '2',
                        faqQuestion: 'How to restore funds from a paper wallet?',
                        faqAnswer: 'Null',
                        // <p><strong>Option 1</strong> - Use the Ripply Android app</p><br>
                        // <p>Download the app: https://play.google.com/store/apps/details?id=com.ripplewallet.ripplewallet
                        // Scan the secret key QR to import it
                        // Now you are able to send your XRP</p>
                        // <br>
                        // <p><strong>Option 2</strong> - Use one of the light Ripple clients</p><br>
                        // <p>This one has a nice interface: https://yxxyun.github.io/ripple-wallet/
                        // This one is pretty raw & minimalistic: https://jatchili.github.io/minimalist-ripple-client/</p>
                        // <br>
                        // <p><strong>Option 3</strong> - Use GateHub (requires identity verification)</p><br>
                        // <p>Register at https://gatehub.net
                        // Navigate to Wallets and click + (Add New) and import your Ripple secret key.</p>
                    },
                ]
            }
        },
        methods: {
            toggle: function (e) {
                e.preventDefault();
                let $this = $('.toggle');
                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp(350);
                } else {
                    $this.parent().parent().find('li .inner').removeClass('show');
                    $this.parent().parent().find('li .inner').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.next().slideToggle(350);
                }
            }
        }
    }
</script>

<style>

</style>
