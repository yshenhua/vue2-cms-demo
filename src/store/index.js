import Vue from 'vue'
import Vuex from 'vuex'
import loginInfo from './modules/loginInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loginInfo
  }
})

export default store
