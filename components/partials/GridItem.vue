<template>
  <nuxt-link :to="to" :class="className">
    <ImageSet :src="'images/' + image" :alt="fullTitle" />
    <span class="h3">
      <span v-if="title1" class="bg-white">{{ title1 }}</span
      ><br v-if="title1" />
      <span
        :data-icon-right="isLink ? 'c' : null"
        :class="isLink ? 'button' : 'bg-gray'"
        >{{ title }}</span
      >
    </span>
  </nuxt-link>
</template>

<style lang="scss" scoped>
a {
  display: block;
  text-align: center;
  text-decoration: none;
  margin-bottom: 3em;
  position: relative;

  &,
  * {
    transition: transform 1s ease-out, width 1s ease-out, padding 1s ease-out,
      background-position 0.3s ease-out !important;
  }

  figure ~ .h3 {
    --rotation: 0;
    --translateY: -66%;
    --translateX: 0;
    transform: translate(var(--translateX), var(--translateY))
      rotate(var(--rotation));
    width: 100%;
    display: block;
    position: absolute;
  }
}

.style-1 {
  figure {
    padding-left: 2em;
    transform: rotate(1deg);
  }
  .h3 {
    --rotation: -1deg;
    width: auto;
    --translateX: 3em;
  }
  &:hover {
    figure {
      transform: translateX(-0.5em) rotate(-1deg);
    }
    .h3 {
      --rotation: 0;
      --translateX: 2em;
    }
  }
}

.style-2 {
  max-width: 75vw;
  margin-bottom: 5em;
  figure {
    transform: rotate(-2deg);
  }
  .h3 {
    --translateY: -30%;
    --rotation: 0deg;
  }
  &:hover {
    figure {
      transform: rotate(-1deg) translate(0.5em, 1em);
    }
    .h3 {
      --translateY: -45%;
      --rotation: -1deg;
      --translateX: -0.2em;
    }
  }
}

.style-3 {
  figure {
    transform: rotate(1deg) translateX(2em);
  }
  .h3 {
    --rotation: -2deg;
    width: auto;
    --translateX: 4em;
  }
  &:hover {
    figure {
      transform: rotate(0deg) translateX(1em);
    }
    .h3 {
      --rotation: -1deg;
      --translateX: 3.5em;
    }
  }
}

.style-4 {
  max-width: 66vw;
  figure {
    transform: rotate(-1deg);
  }
  .h3 {
    width: auto;
    --translateX: -0.5em;
  }

  &:hover {
    figure {
      transform: rotate(-2deg);
    }
    .h3 {
      --translateX: 0;
    }
  }
}

.style-5 {
  max-width: 66vw;
  figure {
    transform: rotate(2deg);
  }
  .h3 {
    right: -1em;
    width: auto;
  }

  &:hover {
    figure {
      transform: rotate(0.5deg);
    }
    .h3 {
      --translateX: -0.5em;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import ImageSet from '~/components/lib/ImageSet.vue'

export default Vue.extend({
  components: {
    ImageSet,
  },
  props: {
    to: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    title1: {
      type: String || null,
      default: null,
    },
    title: {
      type: String || null,
      required: true,
    },
    className: {
      type: String || null,
      default: null,
    },
  },
  computed: {
    fullTitle(): String {
      return (this.title1 ? this.title1 + ' ' : '') + this.title
    },
    isLink(): Boolean {
      return this.to !== ''
    },
  },
})
</script>
