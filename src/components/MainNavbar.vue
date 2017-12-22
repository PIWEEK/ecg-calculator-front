<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse" aria-expanded="false">
          <span class="sr-only">Abrir navegación</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="main-navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" :to="{name: 'Organization'}" active-class="active">
            <a>Organización</a><span v-if="section === 'organization'" class="sr-only"> (actual)</span>
          </router-link>
          <router-link tag="li" :to="{name: 'AssessmentInstructions'}" active-class="active">
            <a>Evaluación</a><span v-if="section === 'assessment'" class="sr-only"> (actual)</span>
          </router-link>
          <router-link tag="li" :to="{name: 'Matrix'}" active-class="active">
            <a>Matriz</a><span v-if="section === 'matrix'" class="sr-only"> (actual)</span>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'main-navbar',
  props: ['section']
}
</script>

<style scoped>
.navbar {
  background-color: #e9f2f2ff;
  font-size: 125%;
}

li.active a {
  background-color: #4d9899;
  border-radius: 5px;
  color: #fff;
  margin: 0.5rem;
  padding: 1rem;
}
</style>
