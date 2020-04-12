<template>
  <div class="row">
    <article v-for="(a, index) in contactPerson" :key="index" :class="classes">
      <ImageSet :src="a.image" :alt="a.name" />
      <h4>{{ a.name }}</h4>
      <p>{{ a.position }}</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@import 'css/_bootstrap_functions.scss';

.row {
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
  @include media-breakpoint-down(m) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
}

h4 {
  margin-bottom: 0em;
  font-size: 0.9rem;
  letter-spacing: -0.5px;
  @include media-breakpoint-up(l) {
    white-space: nowrap;
  }
  @include media-breakpoint-down(s) {
    font-size: 1rem;
  }
}

p {
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
}
</style>

<script lang="ts">
import Vue from 'vue'
import ImageSet from '~/components/lib/ImageSet.vue'

export default Vue.extend({
  components: {
    ImageSet
  },
  props: {
    classes: {
      type: String,
      default: 'col-6 col-s-5 col-m-4 text-m-center'
    }
  },
  data() {
    return {
      contactPerson: [
        {
          name: 'Miss Mueller',
          position: 'Management',
          image: 'images/placeholders/party.jpg'
        },
        {
          name: 'Mister Mueller',
          position: 'Office Managment',
          image: 'images/placeholders/pichilemu0.jpg'
        },
        {
          name: 'Miss Schmidt',
          image: 'images/placeholders/pichilemu1.jpg'
        },
        {
          name: 'Mister Schmidt',
          image: 'images/placeholders/pichilemu2.jpg'
        },
        {
          name: 'Miss Schmitt',
          image: 'images/placeholders/pichilemu3.jpg'
        }
      ]
    }
  }
})
</script>
