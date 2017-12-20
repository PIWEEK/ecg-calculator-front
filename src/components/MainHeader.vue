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
        <router-link to="/" class="navbar-brand">Inicio</router-link>
      </div>
      <div class="collapse navbar-collapse" id="main-navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-if="section === 'organization'" class="active"><router-link to="/">Organización <span class="sr-only">(actual)</span></router-link></li>
          <li v-else><router-link to="/organization">Organización</router-link></li>

          <li v-if="section === 'assessment'" class="active"><router-link to="/">Evaluación <span class="sr-only">(actual)</span></router-link></li>
          <li v-else><router-link to="/assessment">Evaluación</router-link></li>

          <li v-if="section === 'results'" class="active"><router-link to="/">Resultado <span class="sr-only">(actual)</span></router-link></li>
          <li v-else><router-link to="/results">Resultado</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mi usuario<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><router-link to="/">Editar datos</router-link></li>
              <li><router-link to="/">Salir</router-link></li>
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
  props: ['section'],
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
