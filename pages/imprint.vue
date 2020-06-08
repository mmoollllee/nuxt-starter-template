<template>
  <main>
    <h1 class="container title">
      <span class="bg-primary">Imprint</span><br />
      <span class="bg-white">Example Company</span>
    </h1>
    <div class="container">
      <section class="card row">
        <header class="col-12">
          <h2>Information according to § 5 TMG</h2>
        </header>
        <div class="col-12 col-s-6">
          <h3>{{ contact.company }}</h3>
          <p>
            {{ contact.street }}<br />
            {{ contact.postcode }} {{ contact.city }}
          </p>
        </div>
        <div class="col-12 col-s-6">
          <h3>Contact</h3>
          <p>
            <Mailto :mail="contact.mail" data-icon-left="h" /><br />
            <a
              :href="parsePhoneNumberFromString(contact.phone, 'DE').getURI()"
              :title="'call ' + contact.company"
              data-icon-left="k"
            >
              {{ contact.phone }} </a
            ><br />
            <a
              :href="parsePhoneNumberFromString(contact.fax, 'DE').getURI()"
              :title="'send Fax message to ' + contact.company"
              data-icon-left="j"
            >
              {{ contact.fax }}
            </a>
          </p>
          <h4>VAT ID</h4>
          <p>
            DE 123 456 789
          </p>
        </div>
        <Credits class="col-12" />
        <div class="col-12">
          <h3>Other stuff</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, tempora qui! Dolor voluptatem, doloribus ex dolorem et
            magni culpa quis dolore veritatis, laborum ipsum libero molestiae
            aliquid id nam sunt.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Vue from 'vue'

// Data
import infos from '@/config/infos.json'

export default Vue.extend({
  data() {
    return {
      contact: infos.contact,
    }
  },
  methods: {
    parsePhoneNumberFromString,
  },
  head() {
    return {
      title: 'Imprint',
    }
  },
})
</script>
