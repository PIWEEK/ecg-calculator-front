<template>
  <div>
    <div class="row">
      <main-header section="assessment"></main-header>
    </div>
    <div class="row">
      <assessment-navigator section="facts" code="A"></assessment-navigator>
    </div>
    <div class="row">
      <h1>Assessment</h1>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import AssessmentNavigator from '@/components/AssessmentNavigator'

export default {
  name: 'assessment',
  data () {
    return {}
  },
  components: {
    MainHeader,
    AssessmentNavigator
  }
}
</script>

<style scoped>
</style>
