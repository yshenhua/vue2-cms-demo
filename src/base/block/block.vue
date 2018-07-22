<template>
  <div class="block">
    <h4 v-show="title" class="title">{{title}}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .block {
    margin: 25px;
    padding: 25px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(150, 150, 150, .3);
    .title {
      font-size: 20px;
      font-weight: 400;
      margin: 0 0 30px;
    }
  }
</style>
