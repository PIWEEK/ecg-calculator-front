import config from '../../config'
import http from './http'

export default {
  listAssessments: function () {
    return http.fetch('GET', config.API_URL + `/assessments`)
  },

  retrieveAssessment: function (assessmentId) {
    return http.fetch('GET', config.API_URL + `/assessments/${assessmentId}`)
  },

  listStakeholders: function (assessmentId) {
    return http.fetch('GET', config.API_URL + `/assessments/${assessmentId}/stakeholders`)
  },

  listForms: function (assessmentId) {
    return http.fetch('GET', config.API_URL + `/assessments/${assessmentId}/forms`)
  },

  retrieveForm: function (assessmentId, formId) {
    return http.fetch('GET', config.API_URL + `/assessments/${assessmentId}/forms/${formId}`)
  },

  listTopics: function (assessmentId) {
    return http.fetch('GET', config.API_URL + `/assessments/${assessmentId}/topics`)
  },

  retrieveTopic: function (assessmentId, topicId) {
    return http.fetch('GET', config.API_URL + `/assessments/${assessmentId}/topics/${topicId}`)
  }
}

