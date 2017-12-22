<template>
  <div v-if="!form" class="loading">
    <img src="../assets/loading.gif" />
  </div>
  <div v-else>
    <h1 class="col-sm-offset-1">{{ stakeholder.code }} - {{ form.name }}</h1>
    <form class="form-horizontal">
      <div class="form-group" v-for="question in form.questions">
        <label :for="question.slug" class="col-sm-3 col-sm-offset-1 control-label">{{ question.title }}</label>
        <div class="col-sm-6">
          <input
            v-if="question.dataType === 'string'"
            type="text"
            class="form-control"
            :id="question.slug"
            value="">
          <input
            v-if="question.dataType === 'integer'"
            type="number"
            class="form-control"
            min="0"
            :id="question.slug"
            value="0">
          <input
            v-if="question.dataType === 'currency'"
            type="number"
            class="form-control"
            min="0"
            step="0.01"
            :id="question.slug"
            value="0">
          <textarea
            v-if="question.dataType === 'text'"
            class="form-control"
            :id="question.slug"
            :rows="question.options.rows || 3"
            :placeholder="question.options.placeholder || ''" />
          <select
            v-if="question.dataType === 'select'"
            class="form-control"
            :id="question.slug">
            <option v-for="choice in question.options.choices" value="choice[0]">
              {{ choice[1] }}
            </option>
          </select>
        </div>
      </div>
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

export default {
  name: 'assessmentFacts',
  computed: {
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
    }
  },
  methods: {
    retrieveForm () {
      this.$store.dispatch('retrieveForm', this.$route.params.slug)
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
