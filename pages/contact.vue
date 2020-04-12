<template>
  <main>
    <div class="splash">
      <ImageSet src="images/placeholders/night.jpg" alt="Contact" />
    </div>
    <h1 class="container title">
      <span class="bg-primary">Get in touch with</span><br />
      <span class="bg-white">Company GmbH</span>
    </h1>
    <div class="container grid-m">
      <section class="card align-self-start">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </section>
      <Team class="grid-row-span-3 align-self-start" classes="col-6" />
      <section class="space-y align-self-start row">
        <div class="info-box col-auto">
          <span class="col-auto h3 bg-white">{{ contact.company }}</span>
          <div class="bg-gray">
            {{ contact.street }}<br />
            {{ contact.postcode }} {{ contact.city }}
          </div>
        </div>
        <div class="col">
          <Mailto
            :mail="contact.mail"
            class="button bold"
            data-icon-right="h"
          />
          <a
            :href="parsePhoneNumberFromString(contact.phone, 'DE').getURI()"
            :title="'call ' + contact.company"
            class="button bold"
            data-icon-right="l"
          >
            {{ contact.phone }}
          </a>
          <a
            :href="parsePhoneNumberFromString(contact.fax, 'DE').getURI()"
            :title="'Send fax to ' + contact.company"
            class="button bold font-90"
            data-icon-right="j"
          >
            {{ contact.fax }}
          </a>
        </div>
      </section>
      <section>
        <h3 class="bg-gray">Contact Form</h3>
        <Form />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import infos from '@/config/infos.json'
import Team from '~/components/partials/Team.vue'
import Form from '~/components/partials/Form.vue'
import ImageSet from '~/components/lib/ImageSet.vue'

export default {
  components: {
    ImageSet,
    Team,
    Form
  },
  data() {
    return {
      contact: infos.contact
    }
  },
  head() {
    return {
      title: 'Contact – Company GmbH'
    }
  },
  methods: {
    parsePhoneNumberFromString
  }
}
</script>
