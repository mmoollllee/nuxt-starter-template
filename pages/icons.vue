<template>
  <div>
    <h1>Icons</h1>
    <ul class="icons-set">
      <li v-for="(value, key) in icons" :key="key">
        <i :class="`icon-${key}`"></i>
        <span class="mx-2 font-bold">
          {{ String.fromCharCode(parseInt('0x' + value.split('\\')[1])) }}
        </span>
        <span>{{ key }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const icons = require('@/helpers/icons.json')

export default {
  name: 'IconsSection',
  data() {
    return {
      icons,
    }
  },
}
</script>
