<template>
  <div class="assessment-navigator">
    <div class="section">
      <span class="section-title">Datos de la organización</span>
      <ul class="nav nav-pills nav-justified">
        <li role="presentation" class="active"><router-link to="/assessment">A</router-link></li>
        <li role="presentation"><router-link to="/assessment">B</router-link></li>
        <li role="presentation"><router-link to="/assessment">C</router-link></li>
        <li role="presentation"><router-link to="/assessment">D</router-link></li>
        <li role="presentation"><router-link to="/assessment">E</router-link></li>
      </ul>
    </div>
    <div class="section">
      <span class="section-title">Aspectos</span>
      <ul class="nav nav-pills nav-justified">
        <li role="presentation"><router-link to="/assessment">A</router-link></li>
        <li role="presentation"><router-link to="/assessment">B</router-link></li>
        <li role="presentation"><router-link to="/assessment">C</router-link></li>
        <li role="presentation"><router-link to="/assessment">D</router-link></li>
        <li role="presentation"><router-link to="/assessment">E</router-link></li>
      </ul>
    </div>
    <div class="section final">
      <span class="section-title">Resultado</span>
      <ul class="nav nav-pills nav-justified">
        <li role="presentation"><router-link to="/assessment">Ver</router-link></li>
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
