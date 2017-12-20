<template>
  <div class="assessment-navigator">
    <div class="section">
      <span class="section-title">Datos de la organización</span>
      <ul class="nav nav-pills nav-justified">
        <router-link tag="li" :to="{name: 'AssessmentFacts', params: {code: 'A'}}" active-class="active" role="presentation">
          <a>A</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentFacts', params: {code: 'B'}}" active-class="active" role="presentation">
          <a>B</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentFacts', params: {code: 'C'}}" active-class="active" role="presentation">
          <a>C</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentFacts', params: {code: 'D'}}" active-class="active" role="presentation">
          <a>D</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentFacts', params: {code: 'E'}}" active-class="active" role="presentation">
          <a>E</a>
        </router-link>
      </ul>
    </div>
    <div class="section">
      <span class="section-title">Aspectos</span>
      <ul class="nav nav-pills nav-justified">
        <router-link tag="li" :to="{name: 'AssessmentAspects', params: {code: 'A'}}" active-class="active" role="presentation">
          <a>A</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentAspects', params: {code: 'B'}}" active-class="active" role="presentation">
          <a>B</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentAspects', params: {code: 'C'}}" active-class="active" role="presentation">
          <a>C</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentAspects', params: {code: 'D'}}" active-class="active" role="presentation">
          <a>D</a>
        </router-link>
        <router-link tag="li" :to="{name: 'AssessmentAspects', params: {code: 'E'}}" active-class="active" role="presentation">
          <a>E</a>
        </router-link>
      </ul>
    </div>
    <div class="section final">
      <span class="section-title">Resultado</span>
      <ul class="nav nav-pills nav-justified">
        <router-link tag="li" :to="{name: 'AssessmentResults'}" active-class="active" role="presentation">
          <a>Ver</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  props: ['section', 'code'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.assessment-navigator {
  display: flex;
  justify-content: space-evenly;
}

.section {
  background-color: #eee;
  text-align: center;
  padding: 0.5rem 1rem;
}

.section:not(:first-child) {
  margin-left: 1rem;
}

.final {
  flex-shrink: 2;
}
</style>
