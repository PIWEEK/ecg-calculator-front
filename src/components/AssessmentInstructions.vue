<template>
  <div class="instructions">
    <h1>Instrucciones</h1>
    <h2 v-if="assessment">{{ assessment.name }}</h2>
    <p v-if="assessment">Version: {{ assessment.version }} ({{ assessment.year }})</p>
    <p>Aquí irá un bonito texto explicando cómo se rellenan los formularios a continuación.</p>
    <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
    Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
    auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
    <div class="actions">
      <router-link
        v-if="firstStakeholder"
        class="btn btn-primary next"
        role="button"
        :to="{name: 'AssessmentFacts', params: {slug: firstStakeholder.slug}}">
        Siguiente
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'assessmentInstructions',
  computed: {
    ...mapGetters({
      assessment: 'getAssessment',
      firstStakeholder: 'getFirstStakeholder'
    })
  }
}
</script>

<style scoped>
.instructions {
  color: #4d9899;
}

.actions {
  margin: 2rem 0;
}

.actions .next {
  float: right;
  margin-bottom: 3rem;
}
</style>
