<template>
  <div class="layout">
    <v-header></v-header>
    <article class="wrapper">
      <nav :class="['left', {'fold': isFold}]">
        <ul class="nav">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="{ path: item.url }">
              <i :class="['iconfont', item.icon]"></i>
              <span class="text">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
        <span class="btn" @click="isFold = !isFold">
          <i :class="['iconfont', isFold ? 'icon-to-right' : 'icon-to-left']"></i>
        </span>
      </nav>
      <section class="container">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </section>
    </article>
  </div>
</template>

<script>
import vHeader from './Header/Header'

export default {
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
        },
        {
          icon: 'icon-textbox',
          label: '富文本编辑器',
          url: '/editor'
        }
      ],
      isFold: false
    }
  },
  components: {
    vHeader
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    top: $header-height;
    bottom: 0;
    display: flex;
    align-items: stretch;
    width: 100%;
    overflow: hidden;
    .left {
      width: 180px;
      background-color: $bg-color;
      border-right: 1px solid $border-color;
      box-shadow: 0 0 1px $border-color;
      transition: width .3s;
      &.fold {
        width: 70px;
        .nav a .text {
          visibility: hidden;
        }
      }
      .nav {
        @include no-list-style;
        padding: 20px 0;
        a {
          display: block;
          padding: 4px 15px;
          height: 42px;
          line-height: 42px;
          font-size: 0;
          color: $font-color;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          transition: background-color .1s;
          &:hover {
            background-color: #eff1f3;
          }
          .iconfont {
            display: inline-block;
            vertical-align: top;
            font-size: 32px;
          }
          .text {
            display: inline-block;
            vertical-align: top;
            font-size: 16px;
            margin-left: 10px;
            transition: visibility .25s;
          }
        }
      }
      .btn {
        position: absolute;
        left: 15px;
        bottom: 18px;
        display: block;
        text-align: center;
        width: 32px;
        height: 32px;
        line-height: 30px;
        cursor: pointer;
        .iconfont {
          font-size: 24px;
        }
      }
    }
    .container {
      flex: 1;
      overflow: auto;
    }
  }
</style>
