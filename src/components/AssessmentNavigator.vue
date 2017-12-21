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
