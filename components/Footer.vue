<template>
  <footer
    class="container align-items-end d-flex flex-wrap justify-content-center grid justify-items-start"
  >
    <div
      v-if="$nuxt.$route.name !== 'contact'"
      class="info-box col-auto grid-row-span-2"
    >
      <span class="col-auto h3 bg-white">{{ contact.company }}</span>
      <div class="bg-gray">
        {{ contact.street }}<br />
        {{ contact.postcode }} {{ contact.city }}
      </div>
    </div>
    <a
      v-if="$nuxt.$route.name !== 'contact'"
      :href="parsePhoneNumberFromString(contact.phone, 'DE').getURI()"
      :title="'call ' + contact.company"
      class="button bold order-m-2"
      data-icon-right="l"
    >
      {{ contact.phone }}
    </a>
    <Mailto
      v-if="$nuxt.$route.name !== 'contact'"
      :mail="contact.mail"
      class="button bold order-m-4"
      data-icon-right="h"
    />
    <a
      v-if="$nuxt.$route.name !== 'contact'"
      :href="parsePhoneNumberFromString(contact.fax, 'DE').getURI()"
      :title="'Send fax to ' + contact.company"
      class="button bold order-m-3 font-90"
      data-icon-right="j"
    >
      {{ contact.fax }}
    </a>
    <nuxt-link
      v-if="$nuxt.$route.name !== 'contact'"
      class="button bold order-m-5 font-90"
      data-icon-right="c"
      to="/contact"
    >
      Contact Form
    </nuxt-link>
    <nav
      class="col-12 row justify-content-center py-5 grid-col-span-3 order-m-6"
    >
      <nuxt-link to="/imprint" class="col-auto">Imprint</nuxt-link>
      <nuxt-link to="/privacy" class="col-auto">Privacy</nuxt-link>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@import '~/css/_bootstrap_functions.scss';
.info-box {
  width: auto;
  margin: 0.3em 0.5em;
}

.button {
  font-size: 1.2em;
}

nav {
  a {
    color: #fff;
  }
}

@include media-breakpoint-up(m) {
  .grid {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

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
})
</script>
