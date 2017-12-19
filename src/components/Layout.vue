<template>
  <div class="layout">
    <v-header></v-header>
    <v-nav></v-nav>
    <article class="right">
      <v-breadcrumb></v-breadcrumb>
      <router-view/>
    </article>
  </div>
</template>

<script>
import vHeader from './Header'
import vNav from './Nav'
import vBreadcrumb from './Breadcrumb'
export default {
  name: 'layout',
  components: {
    vHeader,
    vNav,
    vBreadcrumb
  }
}
</script>
