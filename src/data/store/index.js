import Vue from 'vue'
import Vuex from 'vuex'

import assessment from './modules/assessment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    assessment
  }
})

