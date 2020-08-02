<template>
  <aside class="card">
    <h3><span class="bg-primary">Data &amp; Facts</span></h3>

    <div>
      <span class="counter-wrapper"
        ><span id="counter-1" class="counter">1234567</span> m²</span
      >
      Fact 1
    </div>

    <div>
      <span class="counter-wrapper"
        ><span id="counter-2" class="counter">1234</span> PS</span
      >
      Fact 2
    </div>

    <div>
      <span class="counter-wrapper"
        ><span id="counter-3" class="counter">1</span> Great Website</span
      >
      Fact 4
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  margin-top: -2rem;
  align-self: start;
  div {
    line-height: 1;
    margin-bottom: 1.3rem;
  }
}
.counter-wrapper {
  font-family: var(--headings-font-family);
  font-weight: 800;
  font-size: 1.5rem;
  text-transform: uppercase;
  display: block;
}
</style>

<script lang="ts">
import { CountUp } from 'countUp.js'
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    const counters = document.getElementsByClassName('counter')
    Array.from(counters).forEach((el) => {
      const inputValue = el.innerHTML

      const decimal = inputValue.split(',')
      const decimalPlaces =
        decimal.length > 1 ? decimal[decimal.length - 1].length : 0

      const options = {
        decimalPlaces,
        duration: 2 + decimal[0].length / 5,
        separator: '.',
        decimal: ',',
      }

      const endValue = Number(inputValue.replace('.', '').replace(',', '.'))

      el.innerHTML = ''

      const countUp = new CountUp(el.id, endValue, options)
      countUp.start()
    })
  },
})
</script>
