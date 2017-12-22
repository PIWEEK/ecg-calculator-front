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
              <p class="aspect-info" v-if="openInfo[aspect.code]">{{ aspect.fullDescription }}</p>
              <div class="form-container">
                <div class="aspect-score">
                  <div class="score-label">Puntuación:</div>
                  <div class="score">40</div>
                  <div class="score-label">Máximo:</div>
                  <div class="score">95</div>
                </div>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label :for="aspect.slug + '_weighting'" class="col-sm-2 control-label">Ponderación</label>
                    <div class="col-sm-3">
                      <select class="form-control" :id="aspect.slug + '_weighting'">
                        <option>Muy alta</option>
                        <option>Alta</option>
                        <option selected>Media</option>
                        <option>Baja</option>
                        <option>No aplica</option>
                      </select>
                    </div>
                    <label :for="aspect.slug + '_level'" class="col-sm-2 control-label">Nivel (1-10)</label>
                    <div class="col-sm-3">
                      <input type="number" class="form-control" :id="aspect.slug + '_level'" placeholder="0">
                    </div>
                  </div>
                  <div class="form-group">
                    <label :for="aspect.slug + '_current_status'" class="col-sm-2 control-label">Estado actual</label>
                    <div class="col-sm-8">
                      <textarea class="form-control"
                        :id="aspect.slug + '_current_status'"
                        rows="3"
                        placeholder="Describe brevemente la situación actual de tu organización en este aspecto" />
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
      openInfo: {}
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
        this.openInfo = to.reduce(
          (codes, topic) => {
            let topicCodes = topic.aspects.reduce(
              (topicCodes, aspect) => { topicCodes[aspect.code] = false; return topicCodes },
              {}
            )
            return {...codes, ...topicCodes}
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

h1 {
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

.aspect-title.negative {
  color: #8a6d3b;
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
