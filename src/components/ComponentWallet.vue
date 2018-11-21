<template>
    <div>
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
</template>

<script>
    export default {
        name: 'ComponentWallet',
        data () {
            return {
                sectionHeading: 'Generate A Ripple Paper Wallet',
                sectionSubHeading: 'Create your own Ripple paper wallet for safe long-term storage of your investment.',
            }
        },
    }
</script>

<style>

</style>
