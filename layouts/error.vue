<template>
  <main>
    <div class="splash">
      <video
        :poster="require('~/assets/images/placeholders/forest.jpg')"
        playsinline
        autoplay
        loop
        muted
        style="width:100%"
        title="advertisment video of your company"
      >
        <source src="/video/forest.m4v" type="video/mp4" />
        <source src="/video/forest.webm" type="video/webm" />
      </video>
    </div>
    <h1 class="container title">
      <span class="bg-white">Company GmbH</span>
    </h1>
    <div class="container grid-m">
      <section class="card">
        <h2>
          The page couldn't be found<br /><span class="bg-white"
            >Error {{ error.statusCode }}</span
          >
        </h2>
        <p>
          It looks like we couldn't find anything. Do you want to go back to the
          Home Page?
        </p>
        <nuxt-link to="/" class="button" data-icon-left="b">Home</nuxt-link>
        <h4 class="mt-5">Error Information</h4>
        <p>{{ error.message }}</p>
      </section>
      <DataAndFacts class="d-none d-m-block" />
    </div>
  </main>
</template>

<script lang="ts">
import DataAndFacts from '~/components/partials/DataAndFacts.vue'

export default {
  components: {
    DataAndFacts
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'default',
  head() {
    return {
      title: 'Page not found'
    }
  }
}
</script>
