import config from '../../../config'
import assessments from '../../../data/api/assessments'

import * as types from '../mutation-types'

const state = {
  assessment: null,
  stakeholders: null,
  forms: null,
  topics: null,
  currentStakeholder: null,
  currentForm: null,
  currentTopics: null
}

const getters = {
  getAssessment: (state) => state.assessment,
  getStakeholders: (state) => state.stakeholders,
  getForms: (state) => state.forms,
  getTopics: (state) => state.topics,
  getCurrentStakeholder: (state) => state.currentStakeholder,
  getCurrentForm: (state) => state.currentForm,
  getCurrentTopics: (state) => state.currentTopics
}

const mutations = {
  [types.SET_ASSESSMENT] (state, assessment) {
    state.assessment = assessment
  },
  [types.SET_STAKEHOLDERS] (state, stakeholders) {
    state.stakeholders = stakeholders
  },
  [types.SET_FORMS] (state, forms) {
    state.forms = forms
  },
  [types.SET_TOPICS] (state, topics) {
    state.topics = topics
  },
  [types.SET_CURRENT_STAKEHOLDER] (state, stakeholder) {
    state.currentStakeholder = stakeholder
  },
  [types.SET_CURRENT_FORM] (state, form) {
    state.currentForm = form
  },
  [types.SET_CURRENT_TOPICS] (state, topics) {
    state.currentTopics = topics
  }
}

const actions = {
  async retrieveAssessment ({commit}) {
    const assessment = await assessments.retrieveAssessment(config.DEFAULT_ASSESSMENT_ID)
    const stakeholders = await assessments.listStakeholders(assessment.id)
    const forms = await assessments.listForms(assessment.id)
    const topics = await assessments.listTopics(assessment.id)
    commit(types.SET_ASSESSMENT, assessment)
    commit(types.SET_STAKEHOLDERS, stakeholders)
    commit(types.SET_FORMS, forms)
    commit(types.SET_TOPICS, topics)
  },

  async retrieveForm ({commit, state}, stakeholderSlug) {
    const stakeholder = state.stakeholders.find((it) => it.slug === stakeholderSlug)
    if (stakeholder) {
      commit(types.SET_CURRENT_STAKEHOLDER, stakeholder)
      const form = state.forms.find((it) => it.stakeholderId === stakeholder.id)
      if (form) {
        const fullForm = await assessments.retrieveForm(state.assessment.id, form.id)
        commit(types.SET_CURRENT_FORM, fullForm)
      }
    }
  },

  async retrieveTopic ({commit, state}, stakeholderSlug) {
    const stakeholder = state.stakeholders.find((it) => it.slug === stakeholderSlug)
    if (stakeholder) {
      commit(types.SET_CURRENT_STAKEHOLDER, stakeholder)
      const topics = state.topics.filter((it) => it.stakeholderId === stakeholder.id)
      const fullTopics = []
      for (let topic of topics) {
        const fullTopic = await assessments.retrieveTopic(state.assessment.id, topic.id)
        fullTopics.push(fullTopic)
      }
      commit(types.SET_CURRENT_TOPICS, fullTopics)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
