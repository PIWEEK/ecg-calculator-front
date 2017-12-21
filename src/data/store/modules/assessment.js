import config from '../../../config'
import assessments from '../../../data/api/assessments'

import * as types from '../mutation-types'

const state = {
  assessment: null
}

const getters = {
  getAssessment: (state) => state.assessment
}

const mutations = {
  [types.SET_ASSESSMENT] (state, assessment) {
    state.assessment = assessment
  }
}

const actions = {
  retrieveAssessment ({commit}) {
    assessments.retrieveAssessment(config.DEFAULT_ASSESSMENT_ID)
      .then((assessment) => {
        commit(types.SET_ASSESSMENT, assessment)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
