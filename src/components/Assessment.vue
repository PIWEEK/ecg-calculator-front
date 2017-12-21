<template>
  <div>
    <div class="row">
      <main-header section="assessment"></main-header>
    </div>
    <div class="row">
      <assessment-navigator></assessment-navigator>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import AssessmentNavigator from '@/components/AssessmentNavigator'

export default {
  name: 'assessment',
  components: {
    MainHeader,
    AssessmentNavigator
  },
  created: function () {
    this.$store.dispatch('retrieveAssessment')
  }
}
</script>

<style scoped>
</style>
