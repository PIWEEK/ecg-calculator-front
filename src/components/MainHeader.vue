<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse" aria-expanded="false">
          <span class="sr-only">Abrir navegación</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link :to="{name: 'Landing'}" class="navbar-brand">Inicio</router-link>
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
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mi usuario<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="#">Editar datos</router-link></li>
              <li><router-link to="#">Salir</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'main-header',
  props: ['section']
}
</script>

<style scoped>
</style>
