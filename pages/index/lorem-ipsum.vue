<template>
  <Modal>
    <h3>
      Lorem &amp;
      <span class="white">Ipsum</span>
    </h3>
    <div class="row">
      <a
        v-for="(image, index) in images"
        :key="index"
        v-bind="image"
        :href="require('~/assets/' + image + '?size=2000')"
        class="col-6 col-sm-4 col-m-3"
        data-fancybox="gallery"
      >
        <ImageSet :src="image" sizes="thumbnail" class="thumbnail" />
      </a>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur,
      totam, aperiam quae alias, doloribus tempora minima ipsam quia modi
      laboriosam. Dolores voluptates cupiditate et, facilis voluptatibus numquam
      omnis fugit!
    </p>
    <h4>The quick brown fox jumps over something.</h4>
    <h5>Is there a other placeholder sentence?</h5>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
    <h4>The quick brown fox jumps over something.</h4>
    <h5>Is there a other placeholder sentence?</h5>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </Modal>
</template>

<script lang="ts">
import Modal from '~/components/partials/Modal.vue'
import ImageSet from '~/components/lib/ImageSet.vue'

export default {
  components: {
    Modal,
    ImageSet,
  },
  data() {
    return {
      images: [
        'images/placeholders/beach0.jpg',
        'images/placeholders/beach1.jpg',
        'images/placeholders/beach2.jpg',
        'images/placeholders/boat0.jpg',
        'images/placeholders/boat1.jpg',
        'images/placeholders/canada.jpg',
        'images/placeholders/chile0.jpg',
        'images/placeholders/chile1.jpg',
      ],
    }
  },
  head() {
    return {
      title: 'Lorem & Ipsum',
    }
  },
  scrollToTop: false,
}
</script>
