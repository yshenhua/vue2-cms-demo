// import Vue from 'vue'
import router from '../../router'
import {
  Notification,
  Loading
} from 'element-ui'

const state = {
  loginInfo: {
    account: '',
    password: ''
  },
  params: {}
}

const getters = {
  getLoginInfo: state => state.loginInfo,
  isLogining: state => state.loginInfo.account && true
}

const actions = {
  fetchLoginInfo ({ commit, state }, inputs) {
    const redirect = router.history.current.query.redirect || '/'
    // Vue.http.post('/api/getOrderList', state.params)
    // .then((res) => {
    //   commit('updateLoginInfo', res.data.info)
    // }, (err) => {})
    if (inputs.account === 'yanshenhua' && inputs.password === '123456') {
      commit('updateLoginInfo', inputs)
      localStorage.setItem('loginInfo', JSON.stringify(inputs))
      router.push({ path: redirect })
    } else {
      Notification({
        title: '登录失败',
        message: '可使用的登录账号为 yanshenhua 123456'
      })
    }
  }
}

const mutations = {
  updateLoginInfo (state, payload) {
    state.loginInfo = payload
  },
  clearLoginInfo (state) {
    let loadingInstance = Loading.service({
      fullscreen: true,
      text: '正在注销...'
    })
    setTimeout(() => {
      loadingInstance.close()
      router.push({ path: '/login' })
      localStorage.clear('loginInfo')
      state.loginInfo = {}
    }, 1500)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
