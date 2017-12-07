<template>
  <div class="layout">
    <v-header></v-header>
    <nav class="left"></nav>
    <article class="right"></article>
  </div>
</template>

<script>
import vHeader from './Header'
export default {
  name: 'layout',
  components: {
    vHeader
  }
}
</script>
