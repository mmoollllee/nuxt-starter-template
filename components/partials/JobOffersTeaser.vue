<template>
  <section class="text-center">
    <ImageSet src="images/placeholders/rainbow.jpg" alt="Job offers" />
    <div class="card">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <p><strong>Get on board!</strong></p>
      <nuxt-link to="/jobs" class="button" data-icon-right="c"
        >Job offers</nuxt-link
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script lang="ts">
import Vue from 'vue'
import ImageSet from '~/components/lib/ImageSet.vue'

export default Vue.extend({
  components: {
    ImageSet,
  },
})
</script>
