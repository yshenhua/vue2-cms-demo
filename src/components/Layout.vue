<template>
  <div class="layout">
    <v-header></v-header>
    <v-nav></v-nav>
    <article class="right">
      <router-view/>
    </article>
  </div>
</template>

<script>
import vHeader from './Header'
import vNav from './Nav'
export default {
  name: 'layout',
  components: {
    vHeader,
    vNav
  }
}
</script>
