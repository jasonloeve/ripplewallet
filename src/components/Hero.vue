<template>
  <section class="section section-hero" id="particles-js">
    <div class="float-content">
      <div class="container is-narrow">
        <h1 class="title">{{ sectionHeading }}</h1>
        <span class="disc">{{ sectionSubHeading }}</span>
        <br>
        <Wallet />
      </div>
    </div>
  </section>
</template>

<script>
import Wallet from './Wallet'

export default {
  name: 'Hero',
  components: {
    Wallet
  },
  data () {
    return {
      sectionHeading: 'Generate A Ripple Paper Wallet',
      sectionSubHeading: 'Create your own Ripple paper wallet for safe long-term storage of your investment.',
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

<style lang="scss" scoped>
.section-hero {
  background-color: #0494fe;
  height: 500px;
  position: relative;
  z-index: 1;
  margin-bottom: 150px;
  color: #ffffff;

  h1.title {
    color: #ffffff;

    &:after {
      background: #ffffff;
    }
  }

  &:after {
    background: inherit;
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
  }

  .float-content {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -150px;
  }
}
</style>
