<template>
  <main>
    <h1 class="container title">
      <span class="bg-primary">privacy</span><br />
      <span class="bg-white">Company</span>
    </h1>
    <div class="container">
      <section id="content" class="card row">
        <header class="col-12">
          <h2>privacy</h2>
        </header>
        <div class="col-12 col-l-6">
          <h3>Put all your privacy-stuff here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            amet ducimus alias a. Rerum amet totam eos magnam omnis ea inventore
            sint, necessitatibus molestiae et explicabo quos ex dicta saepe.
          </p>
        </div>
        <div class="col-12 col-l-6">
          <h4>Responsible for this website</h4>
          <p>
            The persons responsible for data processing on this website are:
          </p>
          <p>
            {{ contact.company }}<br />
            {{ contact.street }}<br />
            {{ contact.postcode }} {{ contact.city }}
          </p>
          <p>
            <a
              :href="parsePhoneNumberFromString(contact.phone, 'DE').getURI()"
              :title="contact.company + ' anrufen'"
              data-icon-left="k"
            >
              {{ contact.phone }} </a
            ><br />
            <Mailto :mail="contact.mail" data-icon-left="h" />
          </p>
        </div>
        <div class="col-12">
          <h3>Plugins and Tools</h3>
          <p>
            The first time you open this web page, a window for Configuration of
            the local website settings is displayed. You have the option of
            using cookies and allow or prohibit third party services.
          </p>
          <button
            class="button secondary"
            data-icon-right="n"
            @click="openCookiePrefs"
          >
            Change Configuration
          </button>
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
    openCookiePrefs() {
      this.$store.commit('cookies/openMessage')
    },
  },
  head() {
    return {
      title: 'privacy',
    }
  },
})
</script>
