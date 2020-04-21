import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cityName: '定位中..'
  },
  mutations: {
    update (state, config) {
        //遍历所有的key值
      Object.keys(config).map((item, key) => {
        state[item] = config[item]
      })
    }
  }
})

export default store;