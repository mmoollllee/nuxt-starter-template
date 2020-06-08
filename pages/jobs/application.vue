<template>
  <Modal>
    <h3>
      Write your speculative application now
    </h3>
    <p>
      Use the following form to request a non-binding application to us.
    </p>
    <p>
      Under "What do you want to apply as?" you can select job postings that
      match your application. Or just leave the field blank and we'll listen to
      what you bring :)
    </p>
    <ApplicationForm />
  </Modal>
</template>

<script lang="ts">
import Modal from '~/components/partials/Modal.vue'
import ApplicationForm from '~/components/partials/ApplicationForm.vue'

export default {
  components: {
    Modal,
    ApplicationForm,
  },
  head() {
    return {
      title: 'Speculative Application – Company GmbH',
    }
  },
  scrollToTop: false,
}
</script>
