<template>
  <div v-if="!topics" class="loading">
    <img src="../assets/loading.gif" />
  </div>
  <div v-else>
    <h1>{{ stakeholder.code }} - {{ stakeholder.name }}</h1>
    <div role="tablist">
      <b-card no-body class="mb-1" v-for="topic in topics" :key="topic.id">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle="topic.code" variant="primary">{{ topic.code }} - {{ topic.name }}</b-btn>
        </b-card-header>
        <b-collapse :id="topic.code" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="aspect" v-for="aspect in topic.aspects" :key="aspect.id">
              <p class="aspect-title" :class="{negative: aspect.isNegative}">
                {{ aspect.code }} - {{ aspect.title }}
                <button class="btn toggle-info" v-on:click="toggleInfo(aspect.code)">?</button>
              </p>
              <div class="modal" tabindex="-1" role="dialog" v-bind:class="{show: openModal[aspect.code]}">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        aria-label="Close"
                        v-on:click="closeModal(aspect.code)">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h3 class="modal-title">{{ aspect.code }} - {{ aspect.title }}</h3>
                    </div>
                    <div class="modal-body">
                      <div class="modal-buttons">
                        <button class="btn btn-link valorative" :class="{active: openModal[aspect.code] === 'valorative'}" type="button" v-on:click="showModal(aspect.code, 'valorative')" title="Preguntas valorativas"></button>
                        <button class="btn btn-link indicators" :class="{active: openModal[aspect.code] === 'indicators'}" type="button" v-on:click="showModal(aspect.code, 'indicators')" title="Indicadores obligatorios"></button>
                        <button class="btn btn-link levels" :class="{active: openModal[aspect.code] === 'levels'}" type="button" v-on:click="showModal(aspect.code, 'levels')" title="Niveles de valoración"></button>
                        <button class="btn btn-link notes" :class="{active: openModal[aspect.code] === 'notes'}" type="button" v-on:click="showModal(aspect.code, 'notes')" title="Notas aclaratorias"></button>
                      </div>
                      <h4 v-if="openModal[aspect.code] === 'valorative'">Preguntas valorativas</h4>
                      <h4 v-if="openModal[aspect.code] === 'indicators'">Indicadores obligatorios</h4>
                      <h4 v-if="openModal[aspect.code] === 'levels'">Niveles de valoración</h4>
                      <h4 v-if="openModal[aspect.code] === 'notes'">Notas aclaratorias</h4>
                      <div v-if="openModal[aspect.code] === 'valorative'" v-html="aspect.valorativeQuestions"></div>
                      <div v-if="openModal[aspect.code] === 'indicators'" v-html="aspect.mandatoryIndicators"></div>
                      <div v-if="openModal[aspect.code] === 'levels'" v-html="aspect.evaluationLevels"></div>
                      <div v-if="openModal[aspect.code] === 'notes'" v-html="aspect.explanatoryNotes"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="aspect-info" v-if="openInfo[aspect.code]">
                  <div v-html="aspect.quickDescription"></div>
                  <div class="more-info-buttons">
                    <button class="btn btn-link valorative" type="button" v-on:click="showModal(aspect.code, 'valorative')" title="Preguntas valorativas"></button>
                    <button class="btn btn-link indicators" type="button" v-on:click="showModal(aspect.code, 'indicators')" title="Indicadores obligatorios"></button>
                    <button class="btn btn-link levels" type="button" v-on:click="showModal(aspect.code, 'levels')" title="Niveles de valoración"></button>
                    <button class="btn btn-link notes" type="button" v-on:click="showModal(aspect.code, 'notes')" title="Notas aclaratorias"></button>
                  </div>
              </div>
              <div class="form-container" v-if="answers[aspect.code]">
                <div class="aspect-score" v-if="answers[aspect.code].score !== 0" :class="{negative: aspect.isNegative}">
                  <div class="score-label">Puntuación:</div>
                  <div class="score">{{ answers[aspect.code].score }}</div>
                  <div class="score-label">Máximo:</div>
                  <div class="score">{{ answers[aspect.code].maxScore }}</div>
                </div>
                <form class="form-horizontal">
                  <div class="form-group" v-bind:class="{ 'has-error': answers[aspect.code].error }">
                    <label :for="aspect.slug + '_weighting'" class="col-sm-2 control-label">Ponderación</label>
                    <div class="col-sm-3">
                      <select class="form-control" v-bind:disabled="aspect.isNegative"
                        :id="aspect.slug + '_weighting'"
                        v-model.number="answers[aspect.code].weighting"
                        v-on:change="valueChanged(topic, aspect)">
                        <option value="2">Muy alta</option>
                        <option value="1">Alta</option>
                        <option value="0" selected>Media</option>
                        <option value="-1">Baja</option>
                        <option value="-2">No aplica</option>
                      </select>
                    </div>
                    <label v-if="!aspect.isNegative" :for="aspect.slug + '_level'" class="col-sm-2 control-label">Nivel (1-10)</label>
                    <label v-else :for="aspect.slug + '_level'" class="col-sm-2 control-label">Nivel (0 / -100)</label>
                    <div class="col-sm-3">
                      <input type="number" class="form-control"
                        :id="aspect.slug + '_level'"
                        v-model.number="answers[aspect.code].level"
                        v-on:change="valueChanged(topic, aspect)">
                    </div>
                  </div>
                  <div class="form-group">
                    <label :for="aspect.slug + '_current_status'" class="col-sm-2 control-label">Estado actual</label>
                    <div class="col-sm-8">
                      <textarea class="form-control"
                        :id="aspect.slug + '_current_status'"
                        rows="3"
                        placeholder="Describe brevemente la situación actual de tu organización en este aspecto"
                        v-model="answers[aspect.code].currentStatus" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div class="actions">
      <router-link
        v-if="!previousStakeholder"
        class="previous"
        role="button"
        :to="{name: 'AssessmentFacts', params: {slug: lastStakeholder.slug}}">
        Volver atrás
      </router-link>
      <router-link
        v-if="previousStakeholder"
        class="previous"
        role="button"
        :to="{name: 'AssessmentAspects', params: {slug: previousStakeholder.slug}}">
        Volver atrás
      </router-link>
      <router-link
        v-if="nextStakeholder"
        class="btn btn-primary next"
        role="button"
        :to="{name: 'AssessmentAspects', params: {slug: nextStakeholder.slug}}">
        Siguiente
      </router-link>
      <router-link
        v-if="!nextStakeholder"
        class="btn btn-primary next"
        role="button"
        :to="{name: 'AssessmentResults'}">
        Siguiente
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'assessmentAspects',
  data () {
    return {
      openInfo: {},
      openModal: {},
      answers: {}
    }
  },
  computed: {
    ...mapGetters({
      stakeholder: 'getCurrentStakeholder',
      topics: 'getCurrentTopics',
      firstStakeholder: 'getFirstStakeholder',
      lastStakeholder: 'getLastStakeholder',
      previousStakeholder: 'getPreviousStakeholder',
      nextStakeholder: 'getNextStakeholder'
    })
  },
  created: function () {
    setTimeout(() => { // TODO: find a way to synchronize this with the retrieveAssessment in Assessment.vue
      this.retrieveTopic()
    }, 1500)
  },
  watch: {
    '$route.params.slug' (to, from) {
      this.retrieveTopic()
    },
    'topics' (to, from) {
      if (to) {
        this.openInfo = this.flattenAspects(to).reduce(
          (codes, aspect) => {
            codes[aspect.code] = false
            return codes
          }, {}
        )

        this.openModal = this.flattenAspects(to).reduce(
          (codes, aspect) => {
            codes[aspect.code] = null
            return codes
          }, {}
        )

        this.answers = this.flattenAspects(to).reduce(
          (answers, aspect) => {
            answers[aspect.code] = {
              weighting: 0,
              level: 0,
              currentStatus: '',
              score: 0,
              maxScore: 0,
              error: false
            }
            return answers
          }, {}
        )
      }
    }
  },
  methods: {
    retrieveTopic () {
      this.$store.dispatch('retrieveTopic', this.$route.params.slug)
    },

    toggleInfo: function (code) {
      this.openInfo[code] = !this.openInfo[code]
    },

    showModal (code, type) {
      this.openModal[code] = type
    },

    closeModal (code) {
      this.openModal[code] = null
    },

    flattenAspects: function (topics) {
      return topics.reduce(
        (topicAspects, topic) => { return topicAspects.concat(topic.aspects) },
        []
      )
    },

    valueChanged: function (topic, aspect) {
      const answer = this.answers[aspect.code]

      if (!aspect.isNegative) {
        if (answer.level < 0 || answer.level > 10) {
          answer.maxScore = 0
          answer.score = 0
          answer.error = true
        } else {
          const topicMax = 200
          const validAspects = topic.aspects.filter(
            (aspect) => !aspect.isNegative
          )
          const totalWeighting = validAspects.reduce(
            (w, aspect) => w + this.answers[aspect.code].weighting + 2,
            0
          )
          answer.error = false
          for (aspect of validAspects) {
            const iterAnswer = this.answers[aspect.code]
            if (!iterAnswer.error) {
              iterAnswer.maxScore = Math.round(topicMax * (iterAnswer.weighting + 2) / totalWeighting)
              iterAnswer.score = Math.round(iterAnswer.level * iterAnswer.maxScore / 10)
            }
          }
        }
      } else {
        if (answer.level !== 0 && answer.level !== -100) {
          answer.maxScore = 0
          answer.score = 0
          answer.error = true
        } else {
          answer.maxScore = 0
          answer.score = answer.level
          answer.error = false
        }
      }
    }
  }
}
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
}

.loading img {
  margin: 3rem;
  height: 50px;
  width: 50px;
}

h1, h2, h3, h4, h5 {
  color: #4d9899;
}

.card {
  margin-top: 3rem;
}

.card:first-child {
  margin-top: 0;
}

.aspect-title {
  font-weight: bold;
  margin: 2rem 0 1rem 0;
}

.aspect-title.negative {
  color: #8a6d3b;
}

.toggle-info {
  background-color: #4d9899;
  border-radius: 10px;
  color: #fff;
  font-size: 75%;
  font-weight: bold;
  padding: 0.5rem;
  width: 3rem;
}

.aspect-info {
  background-color: #eee;
  padding: 1rem;
  margin-bottom: 2rem;
}

.more-info-buttons {
  display: flex;
  justify-content: flex-end;
}

.more-info-buttons button {
  background-size: 4rem;
  background-repeat: none;
  width: 4rem;
  height: 4rem;
  margin: 0 1rem;
}

button.valorative {
  background-image: url(../assets/icono-valorativas.png);
}

button.indicators {
  background-image: url(../assets/icono-indicadores.png);
}

button.levels {
  background-image: url(../assets/icono-niveles.png);
}

button.notes {
  background-image: url(../assets/icono-notas.png);
}

.modal-body {
  overflow: scroll;
  max-height: 75vh;
}

.modal-buttons {
  float: right;
}

.modal-buttons button {
  background-size: 3rem;
  background-repeat: none;
  width: 3rem;
  height: 3rem;
  margin: 0 0.5rem;
}

.modal-buttons button:not(.active) {
  filter: grayscale(100%) brightness(150%);
}

.form-container {
  position: relative;
}

.aspect-score {
  background-color: #e9f2f2ff;
  margin-right: 4rem;
  padding: 1rem 1rem 0 1rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
}

.aspect-score.negative {
  background-color: #8a6d3b;
  color: #fff;
}

.aspect-score .score {
  font-weight: bold;
  margin-bottom: 1rem;
}

textarea {
  resize: vertical;
}

.actions {
  margin: 2rem 0;
}

.actions .previous {
  float: left;
}
.actions .next {
  float: right;
  margin-bottom: 3rem;
}
</style>
