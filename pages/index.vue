<template>
  <main>
    <div class="splash">
      <video
        :poster="require('~/assets/images/placeholders/forest.jpg')"
        playsinline
        autoplay
        loop
        muted
        title="video of your company"
      >
        <source src="/video/forest.mp4" type="video/mp4" />
        <source src="/video/forest.webm" type="video/webm" />
      </video>
    </div>
    <h1 class="container title">
      <span class="bg-primary">We are</span><br />
      <span class="bg-white">Company GmbH</span>
    </h1>
    <div class="container grid-m">
      <section class="card">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <p>
          <strong
            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.</strong
          >
        </p>
      </section>
      <DataAndFacts class="d-none d-m-block grid-row-span-2" />
      <section class="card">
        <h2><span class="bg-primary">Our services</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <p>
          We operate between you hometown and you neighbour town.
        </p>
      </section>

      <section
        class="space-y grid row justify-content-center justify-content-m-around align-items-center grid-col-span-2"
      >
        <GridItem
          v-for="(gridItem, index) in gridItems"
          :key="index"
          v-bind="gridItem"
        />
        <NuxtChild class="col-12 order-last" />
      </section>

      <section class="d-flex flex-wrap justify-content-center mb-auto">
        <header class="card">
          <h2><span class="bg-primary">The Team</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <nuxt-link to="/contact" class="button" data-icon-right="c"
            >To the contact page</nuxt-link
          >
        </header>
      </section>

      <JobOffersTeaser />
    </div>
  </main>
</template>

<script lang="ts">
import JobOffersTeaser from '~/components/partials/JobOffersTeaser.vue'
import GridItem from '~/components/partials/GridItem.vue'
import DataAndFacts from '~/components/partials/DataAndFacts.vue'

export default {
  components: {
    JobOffersTeaser,
    GridItem,
    DataAndFacts
  },
  data() {
    return {
      gridItems: [
        {
          to: '/lorem-ipsum',
          image: 'placeholders/beach0.jpg',
          title1: 'Lorem- &',
          title: 'Ipsum',
          className:
            'style-1 col-12 col-xs-11 col-s-10 mr-s-auto col-sm-9 col-m-7 offset-m-1 col-l-6 mr-l-0 offset-l-0'
        },
        {
          to: '/justo-dolores',
          image: 'placeholders/cooking.jpg',
          title1: 'Justo &',
          title: 'Dolores',
          className: 'style-2 col-12 col-xs-8 col-s-5 col-l-4'
        },
        {
          to: '/gubergren-accusam',
          image: 'placeholders/elba0.jpg',
          title1: 'Gubergren &',
          title: 'Accusam',
          className: 'style-3 col-12 col-xs-10 col-s-6 col-l-5 order-l-last'
        },
        {
          to: '/lorem',
          image: 'placeholders/fire.jpg',
          title: 'Lorem',
          className:
            'style-4 mr-auto col-12 col-s-6 col-sm-5 mr-sm-0 mr-m-5 col-m-4 col-l-3 mr-l-0'
        },
        {
          to: '/lorem-ipsum2',
          image: 'placeholders/life.jpg',
          title1: 'Lorem &',
          title: 'Ipsum',
          className:
            'style-5 ml-auto col-12 col-s-6 col-sm-5 ml-sm-0 col-m-4 col-xl-3'
        }
      ]
    }
  },
  scrollToTop: false
}
</script>
