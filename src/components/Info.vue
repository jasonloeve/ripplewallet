<template>
  <section class="section">
    <div class="container is-narrow">
      <h1 class="title">{{ sectionHeading }}</h1>
      <span class="disc">{{ sectionSubHeading }}</span>
      <br>
      <ul class="accordion">
        <li v-for="faq in faqs" :key="faq.id">
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
export default {
  name: 'Info',
  data () {
    return {
      sectionHeading: 'Wallet FAQ',
      sectionSubHeading: 'All you need to know about Ripple paper wallets, Crypto currency security and how to restore your funds to start trading.',
      faqs: [
        {
          faqId: '0',
          faqQuestion: 'What are the benefits of a Ripple paper wallet?',
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
          faqAnswer: '',
        },
      ]
    }
  },
  methods: {
    toggle () {

    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;

  .inner {
    padding-left: 1em;
    overflow: hidden;
    display: none;

    &.show {
      border: 1px solid #cccccc;
      padding: .75em;
    }
  }
  li {
    margin: .5em 0;

    a {
      &.toggle {
        width: 100%;
        display: block;
        border: 1px solid #cccccc;
        padding: .75em;
        transition: background .3s ease;
        margin-bottom: 8px;
        color: #363636;
        text-transform: uppercase;

        &:after {
          content: '\f067';
          font-family: "Font Awesome 5 Free";
          font-weight: normal;
          font-style: normal;
          margin: 0px 0px 0px 10px;
          text-decoration: none;
          color: #cccccc;
          float: right;
        }
      }
    }
  }
}
</style>
