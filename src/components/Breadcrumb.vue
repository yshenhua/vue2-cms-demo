<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in items"
      :key="index">
      {{ item }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    changeBrand () {
      this.items = []
      this.$route.matched.forEach((item) => {
        this.items.push(item.name)
      })
      // this.items.shift()
    }
  },
  watch: {
    $route: 'changeBrand'
  },
  created () {
    this.changeBrand()
  }
}
</script>

<style lang="scss" scoped>
  .el-breadcrumb {
    padding: 10px 25px 5px;
  }
</style>
