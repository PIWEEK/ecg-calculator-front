<template>
  <div class="assessment-navigator" v-if="stakeholders">
    <div class="section">
      <span class="section-title">Datos de la organización</span>
      <ul class="nav nav-pills nav-justified">
        <router-link v-for="stakeholder in stakeholders" :key="stakeholder.id"
          tag="li"
          :to="{name: 'AssessmentFacts', params: {slug: stakeholder.slug}}"
          active-class="active"
          role="presentation">
          <a>{{ stakeholder.code }}</a>
        </router-link>
      </ul>
    </div>
    <div class="section">
      <span class="section-title">Aspectos</span>
      <ul class="nav nav-pills nav-justified">
        <router-link v-for="stakeholder in stakeholders" :key="stakeholder.id"
          tag="li"
          :to="{name: 'AssessmentAspects', params: {slug: stakeholder.slug}}"
          active-class="active"
          role="presentation">
          <a>{{ stakeholder.code }}</a>
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
import { mapGetters } from 'vuex'

export default {
  name: 'assessment-navigator',
  computed: {
    ...mapGetters({
      stakeholders: 'getStakeholders'
    })
  }
}
</script>

<style scoped>
.assessment-navigator {
  display: flex;
  justify-content: space-evenly;
}

.section {
  border: 1px solid #4d9899;
  border-radius: 8px;
  text-align: center;
  padding: 1rem;
}

.section:not(:first-child) {
  margin-left: 1rem;
}

.section-title {
  color: #4d9899;
  margin: 0.5rem 0;
}

.final {
  flex-shrink: 2;
}

.nav-pills {
  margin-top: 1rem;
}

.nav-pills li a {
  border: 1px solid #4d9899;
  border-radius: 8px;
  margin: 0.5rem 1rem;
  padding: 0;
}
</style>
