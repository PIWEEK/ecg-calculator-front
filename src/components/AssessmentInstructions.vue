<template>
  <div>
    <h1>Instrucciones</h1>
    <h2 v-if="assessment">{{ assessment.name }}</h2>
    <p v-if="assessment">Version: {{ assessment.version }} ({{ assessment.year }})</p>
    <p>Aquí irá un bonito texto explicando cómo se rellenan los formularios a continuación.</p>
    <div class="actions">
      <router-link class="btn btn-primary next" role="button" :to="{name: 'AssessmentFacts', params: {code: 'A'}}">Siguiente</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'assessmentInstructions',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      assessment: 'getAssessment'
    })
  }
}
</script>

<style scoped>
.actions {
  margin: 2rem 0;
}

.actions .next {
  float: right;
}
</style>
