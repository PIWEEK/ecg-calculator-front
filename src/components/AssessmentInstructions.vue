<template>
  <div>
    <h1>Instrucciones</h1>
    <p>Aquí irá un bonito texto explicando cómo se rellenan los formularios a continuación.</p>
    <div class="actions">
      <router-link class="btn btn-primary next" role="button" :to="{name: 'AssessmentFacts', params: {code: 'A'}}">Siguiente</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assessmentInstructions',
  data () {
    return {}
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
