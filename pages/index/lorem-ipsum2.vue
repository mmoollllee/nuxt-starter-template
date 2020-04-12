<template>
  <Modal>
    <h3>
      Lorem &amp;
      <span class="white">Ipsum</span>
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </Modal>
</template>

<script lang="ts">
import Modal from '~/components/partials/Modal.vue'

export default {
  components: {
    Modal
  },
  head() {
    return {
      title: 'Lorem & Ipsum'
    }
  },
  scrollToTop: false
}
</script>
