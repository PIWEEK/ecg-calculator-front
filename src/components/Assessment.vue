<template>
  <div class='container'>
    <div class="row">
      <main-header></main-header>
    </div>
    <div class="row">
      <main-navbar section="assessment"></main-navbar>
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
import MainNavbar from '@/components/MainNavbar'
import AssessmentNavigator from '@/components/AssessmentNavigator'

export default {
  name: 'assessment',
  components: {
    MainHeader,
    MainNavbar,
    AssessmentNavigator
  },
  created: function () {
    this.$store.dispatch('retrieveAssessment')
  }
}
</script>

<style scoped>
</style>
