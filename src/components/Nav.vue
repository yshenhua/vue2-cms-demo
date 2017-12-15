<template>
  <nav class="left">
    <ul class="nav">
      <li v-for="(item, index) in navItems" :key="index">
        <router-link :to="{ path: '/form' }">
          <el-tooltip effect="dark" :content="item.label" placement="right">
            <i class="iconfont" :class="item.icon"></i>
          </el-tooltip>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'vNav',
  data () {
    return {
      navItems: [
        {
          icon: 'icon-table',
          label: '表格',
          url: '/table'
        },
        {
          icon: 'icon-form',
          label: '表单',
          url: '/form'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  nav.left {
    @include border-shadow;
    border: 0;
    background-color: $bg-color;
    ul.nav {
      @include no-list-style;
      padding: 20px 0;
      li {
        text-align: center;
        padding: 4px 0;
        cursor: pointer;
        > a {
          color: $font-color;
          text-decoration: inherit;
          .iconfont {
            font-size: 32px;
          }
        }
      }
    }
  }
</style>
