<template>
  <div class="wallet-wrapper">
    <div class="wallet-card">
      <div class="address-left">
        <span>Ripple Address</span>
        <div id="qr-address-public"></div>
      </div>
      <div class="address-public">
        <span id="address-public-text"></span>
      </div>
      <div class="spacer"></div>
      <div class="address-private">
        <span id="address-private-text"></span>
      </div>
      <div class="address-right">
        <span>Secret Key - Keep Safe</span>
        <div id="qr-address-private"></div>
      </div>
      <div class="wallet-info">
        <div class="wallet-copy">
          {{ walletCopy }}
        </div>
      </div>
    </div>
    <br><br>
    <div class="wallet-triggers">
      <button class="button is-primary is-medium" title="btnOne" @click="generate">
        {{ btnOne }} <i class="far fa-credit-card"></i>
      </button> &nbsp;
      <button class="button is-primary is-medium" title="btnTwo" @click="print">
        {{ btnTwo }} <i class="fas fa-print"></i>
      </button>
    </div>
  </div>
</template>

<script>
import keypairs from 'ripple-keypairs';
import QRCode from 'qrcode-js-package';

export default {
  name: 'Wallet',
  data () {
    return {
      sectionHeading: 'Generate A Ripple Paper Wallet',
      sectionSubHeading: 'Create your own Ripple paper wallet for safe long-term storage of your investment.',
      walletCopy: 'All you need to know about Ripple paper wallets, Crypto currency security and how to restore your funds to start trading.',
      btnOne: 'Generate XRP Wallet',
      btnTwo: 'Print XRP Wallet'
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

      // =========================
      // Generate QR codes for public and private address
      // =========================

      document.getElementById('qr-address-public').innerHTML = '';
      document.getElementById('qr-address-private').innerHTML = '';

      const qrpublic = new QRCode('qr-address-public');
      const qrprivate = new QRCode('qr-address-private');

      qrpublic.makeCode(address);
      qrprivate.makeCode(secret);

      document.getElementById('address-public-text').innerHTML = address;
      document.getElementById('address-private-text').innerHTML = secret;

    },
    generate: function (e) {

      // =========================
      // On click generate a new public & private address pair
      // =========================

      e.preventDefault();
      this.generateWallet();

    },
    print: function (e) {

      // =========================
      // On click print page
      // =========================

      e.preventDefault();
      window.print();

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

<style lang="scss" scoped>
.wallet-wrapper {
  .wallet-card {
    font-size: 14px;
    position: relative;
    color: black;
    margin: auto;
    display: block;
    background-image: url('../assets/img/xrp-moon.png') ;
    background-color: #0594ff;
    background-size: 170px;
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
    box-shadow: 0 14px 30px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);

    .address {
      &-left, &-right {
        position: absolute;
        top: 14px;

        span {
          margin-bottom: 10px;
          display: block;
          color: #ffffff;
          text-transform: uppercase;
        }
      }

      &-left {
        left: 64px;
      }

      &-right {
        right: 64px;
      }
    }

    #qr-address-public,
    #qr-address-private {
      background: #ffffff;
      padding: 10px;
      max-width: 200px;

      img {
        max-width: 200px;
      }

      canvas {
        max-width: 200px;
      }
    }

    .address-private,
    .address-public {
      background: #ffffff;
      position: absolute;
      top: 0px;
      padding: 10px;
      width: 320px;
      text-align: center;
    }

    .address-private {
      right: 40px;
      transform-origin: 100% 0;
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    }

    .address-public {
      left: 40px;
      transform-origin: 0 0;
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    }

    .wallet-info {
      display: block;
      position: absolute;
      bottom: 16px;
      margin: 0 36px;
      color: #ffffff;
      font-size: 14px;
      width: 100%;

      .wallet-logo {
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 0;
      }

      .wallet-copy {
        max-width: 400px;
        display: inline-block;
      }
    }
  }
  .wallet-triggers {
    text-align: center;
  }
}
</style>
