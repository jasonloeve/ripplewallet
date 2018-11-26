<template>
    <div>
        <div class="wallet-card" id="paper">
            <!-- ======================= -->
            <!-- Where the magic happens -->
            <!-- ======================= -->
            <div id="left">
                <span>Ripple Address</span>
                <div id="qraddr" class="qr"></div>
                <!--Temp testing-->
                <div id="qrcode" class="qr"></div>
            </div>
            <div id="address">
                <span id="addrtext"></span>
            </div>
            <div id="void"></div>
            <div id="secret">
                <span id="secrtext"></span>
            </div>
            <div id="right">
                <span>Secret Key - Keep Safe</span>
                <div id="qrsecr" class="qr"></div>
            </div>
            <div class="wallet-info">
                <div class="wallet-copy">
                    {{ walletCopy }}
                </div>
                <div class="wallet-logo">
                    <!--<img class="logo initial_logo" src="https://ripple.com/wp-content/themes/ripple-beta/assets/img/logo/ripple-logo-white.png">-->
                </div>
            </div>
            <!-- ======================= -->
            <!-- Where the magic happens -->
            <!-- ======================= -->
        </div>
        <br><br>
        <div class="button-holder has-text-centered">
            <button class="button is-primary is-medium" title="Generate new" @click="generate">
                Generate XRP Wallet &nbsp;<i class="fa fa-credit-card" aria-hidden="true"></i>
            </button> &nbsp;
            <button class="button is-primary is-medium" onclick="window.print()" title="Print">
                Print XRP Wallet &nbsp;<i class="fa fa-print" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import keypairs from 'ripple-keypairs';
    import QRCode from 'qrcode-js-package';

    export default {
        name: 'ComponentWallet',
        data () {
            return {
                sectionHeading: 'Generate A Ripple Paper Wallet',
                sectionSubHeading: 'Create your own Ripple paper wallet for safe long-term storage of your investment.',
                walletCopy: 'All you need to know about Ripple paper wallets, Crypto currency security and how to restore your funds to start trading.',
            }
        },
        methods: {
            generateWallet: function () {

                // =========================
                // Generate a XRP wallet using keypairs
                // =========================

                const secret = keypairs.generateSeed();
                const keypair = keypairs.deriveKeypair(secret);
                const address = keypairs.deriveAddress(keypair.publicKey);

                // document.getElementById('addrtext').innerHTML = address;
                // document.getElementById('secrtext').innerHTML = secret;

                // =========================
                // Generate QR codes for public and private address
                // =========================

                let qrcode = new QRCode("qrcode");

                document.getElementById('qraddr').innerHTML = '';
                document.getElementById('qrsecr').innerHTML = '';

                const qraddr = new QRCode("qraddr");
                const qrsecr = new QRCode("qrsecr");

                qraddr.makeCode(address);
                qrsecr.makeCode(secret);

                document.getElementById('addrtext').innerHTML = address;
                document.getElementById('secrtext').innerHTML = secret;



                // const seed = (process.argv.length==3) ? process.argv[2] : keypairs.generateSeed();
                // const keypair = keypairs.deriveKeypair(seed);

                // console.log("Ripple-address: " + keypairs.deriveAddress(keypair.publicKey));
                // console.log("Ripple-secret:  " + seed);

                // const rippleKeyPairs = new rippleKeyPairs();
                // const secret = rippleKeyPairs.generateSeed();
                // const keypair = rippleKeyPairs.deriveKeypair(secret);
                // const address = rippleKeyPairs.deriveAddress(keypair.publicKey);
                // return {"address" : address, "secret" : secret};
                // console.log(address);

                // const seed = generateSeed();
                // const keypair = deriveKeypair(seed);
                // const address = deriveAddress(keypair.publicKey);
                // return {"address" : address, "secret" : seed};
                // var seed = rk.generateSeed();
                // var keypair = rk.deriveKeypair(seed);
                // var address = rk.deriveAddress(keypair.publicKey);

            },
            generate: function () {

                // =========================
                // On click generate a new public & private address pair
                // =========================

                //this.generateWallet();

            }
        },
        mounted: function(){

            // =========================
            // Init load give us a random public & private address
            // =========================

            this.generateWallet();
        }
    }
</script>

<style>
    #qrcode {
        width:160px;
        height:160px;
        margin-top:15px;
    }
    .wallet-card {
        position: relative;
        color: black;
        margin: auto;
        display: block;
        background-image: url('../assets/img/xrp-moon.png') ;
        background-color: #0594ff;
        background-size: 180px;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #007ad6;
        border-right: none;
        border-left: none;
        padding: 30px;
        width: 100%;
        height: 320px;
        z-index: 999999;
        border-radius: 0;
        -webkit-box-shadow: 0 14px 30px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
        box-shadow: 0 14px 30px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
    }
</style>
