<template>
  <header class="top">
    <h1 class="title">
      <span>后台管理系统</span>
    </h1>
    <el-popover
      trigger="click"
      placement="bottom-end"
      popper-class="user-info">
      <span slot="reference" class="btn">
        <i class="iconfont icon-user"></i>
        <i class="iconfont icon-downward"></i>
      </span>
      <ul class="list">
        <li class="account">账号 <strong>{{ $store.getters.getLoginInfo.account }}</strong></li>
        <li class="divider"></li>
        <li><a href="https://github.com/yshenhua/vue2-cms-demo" target="_blank">帮助</a></li>
        <li><a href="javascript:0">设置</a></li>
        <li><a href="javascript:0" @click="signOut">退出</a></li>
      </ul>
    </el-popover>
  </header>
</template>

<script>
export default {
  name: 'header',
  methods: {
    signOut () {
      // console.log('注销')
      this.$store.commit('clearLoginInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
  header.top {
    @include no-user-select;
    color: $bar-font-color;
    > h1.title {
      float: left;
      font-size: 21px;
      font-weight: normal;
      line-height: 24px;
      margin: 18px 20px 17px;
      cursor: default;
    }
    span.btn {
      float: right;
      // font-size: 16px;
      // line-height: 18px;
      $header-height: 60px;
      $height: 21px;
      height: $height;
      margin: ($header-height - $height) / 2 20px ($header-height - $height) / 2 - 1;
      cursor: pointer;
      > .icon-user {
        font-size: $height;
        vertical-align:middle;
      }
      > .icon-downward {
        font-size: 12px;
        vertical-align:middle;
      }
    }
  }
  .user-info {
    box-sizing: border-box;
    width: 180px;
    padding: 10px 0;
    .list {
      @include no-list-style;
      > li {
        background: #fff;
        > a {
          text-decoration: none;
          display: block;
          padding: 4px 10px 4px 15px;
          overflow: hidden;
          color: $font-color;
          white-space: nowrap;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        &:hover {
          > a {
            background: $hover-color;
            color: #fff;
          }
        }
        &.account {
          padding: 0 10px 0 15px;
        }
        &.divider {
          height: 1px;
          margin: 8px 1px;
          background-color: $border-color;
        }
      }
    }
  }
</style>
