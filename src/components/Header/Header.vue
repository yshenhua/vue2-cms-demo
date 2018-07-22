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
        <li><a href="https://github.com/yshenhua/vue2-cms-demo" target="_blank">设置</a></li>
        <li><a href="javascript:0" @click="signOut">退出</a></li>
      </ul>
    </el-popover>
  </header>
</template>

<script>
export default {
  name: 'vHeader',
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
    position: absolute;
    left: 0;
    width: 100%;
    height: $header-height;
    color: $header-font-color;
    background-color: $header-bg-color;
    user-select: none;
    h1.title {
      float: left;
      margin: 0 10px;
      line-height: $header-height;
      display: flex;
      font-size: 21px;
      font-weight: 400;
      font-family: STKaiti;
      text-shadow: 1px 1px 0 rgba(255, 255, 255, .2);
      cursor: default;
      &::before {
        content: '';
        display: block;
        width: $header-height;
        height: $header-height;
        background-image: url('./logo.png');
        background-size: $header-height - 20 $header-height - 20;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    span.btn {
      float: right;
      $height: 24px;
      height: $height;
      margin: ($header-height - $height) / 2 20px ($header-height - $height) / 2 - 1;
      cursor: pointer;
      > .icon-user {
        vertical-align:middle;
        font-size: 21px;
      }
      > .icon-downward {
        vertical-align:middle;
        font-size: 12px;
      }
    }
  }
  .user-info {
    box-sizing: border-box;
    padding: 10px 0;
    width: 180px;
    .list {
      @include no-list-style;
      > li {
        a {
          display: block;
          padding: 4px 10px 4px 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: $font-color;
          text-decoration: none;
          cursor: pointer;
        }
        &:hover {
          > a {
            color: #fff;
            background: $hover-color;
          }
        }
        &.account {
          padding: 0 10px 0 15px;
        }
        &.divider {
          margin: 8px 1px;
          height: 1px;
          background-color: $border-color;
        }
      }
    }
  }
</style>
