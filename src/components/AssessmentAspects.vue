<template>
  <div v-if="topics">
    <h1>{{ stakeholder.code }} - {{ stakeholder.name }}</h1>
    <div role="tablist">
      <b-card no-body class="mb-1" v-for="topic in topics" :key="topic.id">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle="topic.code" variant="info">{{ topic.code }} - {{ topic.name }}</b-btn>
        </b-card-header>
        <b-collapse :id="topic.code" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="aspect" v-for="aspect in topic.aspects" :key="aspect.id">
              <p class="aspect-title" :class="{negative: aspect.isNegative}">
                {{ aspect.code }} - {{ aspect.title }}
                <button class="btn toggle-info" v-on:click="toggleInfo(aspect.code)">?</button>
              </p>
              <p class="aspect-info" v-if="openInfo[aspect.code]">{{ aspect.fullDescription }}</p>
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
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div class="actions">
      <router-link class="previous" role="button" :to="{name: 'AssessmentFacts', params: {slug: 'E'}}">Volver atrás</router-link>
      <router-link class="btn btn-primary next" role="button" :to="{name: 'AssessmentAspects', params: {slug: 'B'}}">Siguiente</router-link>
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
      topics: 'getCurrentTopics'
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
  background-color: #337ab7;
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
}

.aspect-title.negative {
  color: red;
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
}
</style>
