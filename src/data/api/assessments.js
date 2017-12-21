import config from '../../config'

export default {
  listAssessments: function () {
    return _httpRequest('GET', config.API_URL + '/assessments')
  },

  retrieveAssessment: function (assessmentId) {
    return _httpRequest('GET', config.API_URL + '/assessments/' + assessmentId.toString())
  }
}

function _httpRequest (method, url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method
    }).then((response) => {
      if (!response.ok) {
        reject('api error', response.status, response.statusText)
      } else {
        response.json()
          .then((data) => resolve(data))
      }
    })
    .catch((error) => {
      reject(error)
    })
  })
}

