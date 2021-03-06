import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login/Login'

import store from './../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '首页',
      component: Layout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/table',
          name: '表格',
          component: relsove => require(['@/pages/table/Table'], relsove)
        },
        {
          path: '/form',
          name: '表单',
          component: relsove => require(['@/pages/form/Form'], relsove)
        },
        {
          path: '/editor',
          name: '富文本编辑器',
          component: relsove => require(['@/pages/editor/Editor'], relsove)
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogining) {
      const isInLocal = localStorage.getItem('loginInfo') || ''
      if (!isInLocal) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        const loginInfo = JSON.parse(isInLocal)
        store.commit('updateLoginInfo', loginInfo)
        next()
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
