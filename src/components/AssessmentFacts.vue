<template>
  <div v-if="!form" class="loading">
    <img src="../assets/loading.gif" />
  </div>
  <div v-else>
    <h1 class="col-sm-offset-1">
      {{ stakeholder.code }} - {{ form.name }}
      <button class="btn toggle-info" v-on:click="toggleInfo(stakeholder.code)">?</button>
    </h1>
    <div class="fact-info" v-if="openInfo" v-html="stakeholder.description"></div>
    <form class="form-horizontal">
      <template v-for="item in questionsAndSubForms">

        <div class="form-group" v-if="item.thisIsA === 'question'">
          <label :for="item.slug" class="col-sm-3 col-sm-offset-1 control-label">{{ item.title }}</label>
          <div class="col-sm-6">
            <assessment-facts-field :question="item" />
          </div>
        </div>

        <div class="sub-form" v-if="item.thisIsA === 'subForm'">
          <div class="col-sm-11 sub-form-caption">{{ item.caption }}</div>
          <div class="sub-form-label"
            :class="'col-sm-' + subQuestion.columns" v-for="subQuestion in item.subQuestions" :key="subQuestion.id">
            {{ subQuestion.title }}
          </div>
          <div class="sub-form-instance" v-for="(instance, index) in formInstances[item.slug]">
            <div class="form-group">
              <div :class="'col-sm-' + subQuestion.columns" v-for="subQuestion in item.subQuestions" :key="subQuestion.id">
                <label :for="subQuestion.slug" class="sr-only control-label">{{ subQuestion.title }}</label>
                <assessment-facts-field :question="subQuestion" />
              </div>
              <button
                v-if="formInstances[item.slug].length > 1"
                class="btn btn-link col-sm-1 glyphicon glyphicon-trash"
                v-on:click="removeInstance(item.slug, index)"></button>
            </div>
          </div>
          <button class="btn btn-link" v-on:click="addInstance(item.slug)">Añadir otro</button>
        </div>

      </template>
    </form>
    <div class="actions">
      <router-link
        v-if="!previousStakeholder"
        class="previous"
        role="button"
        :to="{name: 'AssessmentInstructions'}">
        Volver atrás
      </router-link>
      <router-link
        v-if="previousStakeholder"
        class="previous"
        role="button"
        :to="{name: 'AssessmentFacts', params: {slug: previousStakeholder.slug}}">
        Volver atrás
      </router-link>
      <router-link
        v-if="nextStakeholder"
        class="btn btn-primary next"
        role="button"
        :to="{name: 'AssessmentFacts', params: {slug: nextStakeholder.slug}}">
        Siguiente
      </router-link>
      <router-link
        v-if="!nextStakeholder"
        class="btn btn-primary next"
        role="button"
        :to="{name: 'AssessmentAspects', params: {slug: firstStakeholder.slug}}">
        Siguiente
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AssessmentFactsField from '@/components/AssessmentFactsField'

export default {
  name: 'assessmentFacts',
  components: {
    AssessmentFactsField
  },
  data: function () {
    return {
      formInstances: {},
      openInfo: false
    }
  },
  computed: {
    questionsAndSubForms: function () {
      let combined = []
      for (let q of this.form.questions) {
        q.thisIsA = 'question'
        combined[q.order - 1] = q
      }
      for (let subForm of this.form.subForms) {
        subForm.thisIsA = 'subForm'
        combined[subForm.order - 1] = subForm
        this.formInstances[subForm.slug] = [{}]
      }
      return combined
    },
    ...mapGetters({
      stakeholder: 'getCurrentStakeholder',
      form: 'getCurrentForm',
      firstStakeholder: 'getFirstStakeholder',
      lastStakeholder: 'getLastStakeholder',
      previousStakeholder: 'getPreviousStakeholder',
      nextStakeholder: 'getNextStakeholder'
    })
  },
  created: function () {
    setTimeout(() => { // TODO: find a way to synchronize this with the retrieveAssessment in Assessment.vue
      this.retrieveForm()
    }, 1500)
  },
  watch: {
    '$route.params.slug' (to, from) {
      this.retrieveForm()
      this.openInfo = false
    }
  },
  methods: {
    retrieveForm () {
      this.$store.dispatch('retrieveForm', this.$route.params.slug)
    },
    toggleInfo: function (code) {
      this.openInfo = !this.openInfo
    },
    addInstance (slug) {
      this.formInstances[slug].push({})
      this.$forceUpdate()
    },
    removeInstance (slug, index) {
      this.formInstances[slug].splice(index, 1)
      this.$forceUpdate()
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

.toggle-info {
  background-color: #4d9899;
  border-radius: 10px;
  color: #fff;
  font-size: 40%;
  font-weight: bold;
  padding: 0.5rem;
  width: 3rem;
}

.fact-info {
  background-color: #eee;
  padding: 1rem;
  margin-bottom: 2rem;
}

.sub-form .form-group {
  margin: 0.5rem 0 0;
}

.sub-form-caption {
  font-weight: bold;
  padding: 0 0 0 15px;
}

.sub-form-label {
  font-weight: bold;
  margin-top: 0.5rem;
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
