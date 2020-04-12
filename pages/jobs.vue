<template>
  <main>
    <div class="splash">
      <ImageSet src="images/placeholders/bamboo.jpg" alt="Job offers" />
    </div>
    <h1 class="container title">
      <span class="bg-primary">Get on board with</span><br />
      <span class="bg-white">Company GmbH</span>
    </h1>
    <div class="container grid-m">
      <section class="card">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.
        </p>
        <p>
          <strong>Get on board!</strong>
        </p>
      </section>
      <aside class="card grid-row-span-2">
        <h3>
          <span class="bg-primary">We want</span
          ><span class="bg-primary">to get</span
          ><span class="bg-primary">to know you</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <nuxt-link class="button" data-icon-right="c" to="/jobs/application"
          >Application</nuxt-link
        >
      </aside>
      <NuxtChild />
    </div>
  </main>
</template>

<script lang="ts">
import ImageSet from '~/components/lib/ImageSet.vue'

export default {
  components: {
    ImageSet
  },
  head() {
    return {
      title: 'Job Offers at Company GmbH'
    }
  },
  scrollToTop: false
}
</script>

<style scoped lang="scss"></style>
