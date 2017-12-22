<template>
  <div class='container'>
    <div class="row">
      <main-header></main-header>
    </div>
    <div class="row">
      <main-navbar section="organization"></main-navbar>
    </div>
    <div class="row instructions">
      <h1>Organización</h1>
      <p>Necesitamos, para empezar, que introduzcas unos pocos datos generales de tu organización</p>
    </div>
    <div class="row">
      <form>
        <div class="form-group">
          <label for="name" class="control-label">Nombre de la organización</label>
          <input type="text" class="form-control" id="name" value="">
        </div>
        <div class="form-group">
          <label for="address" class="control-label">Dirección</label>
          <input type="text" class="form-control" id="address" value="">
        </div>
        <div class="form-group">
          <label for="state" class="control-label">Provincia</label>
          <input type="text" class="form-control" id="state" value="">
        </div>
        <div class="form-group">
          <label for="sector" class="control-label">Sector de actividad</label>
          <input type="text" class="form-control" id="sector" value="">
        </div>
        <div class="form-group">
          <label for="url" class="control-label">Página web</label>
          <input type="text" class="form-control" id="url" value="">
        </div>
        <div class="form-group">
          <label for="short-description" class="control-label">Breve descripción de la organización</label>
          <textarea class="form-control" id="short-description" rows="3" />
        </div>
        <div class="form-group">
          <label for="full-description" class="control-label">Otros comentarios</label>
          <textarea class="form-control" id="full-description" rows="6" placeholder="Introduce cualquier información que desees sobre la organización"/>
        </div>
      </form>
      <div class="actions">
        <router-link
          class="btn btn-primary next"
          role="button"
          :to="{name: 'AssessmentInstructions'}">
          Siguiente
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainNavbar from '@/components/MainNavbar'

export default {
  name: 'organization',
  components: {
    MainHeader,
    MainNavbar
  }
}
</script>

<style scoped>
.instructions {
  color: #4d9899;
  margin-bottom: 3rem;
}

form {
  margin: 0 auto;
  max-width: 800px;
}

textarea#short-description {
  resize: none;
}

textarea#full-description {
  resize: vertical;
}

.actions {
  margin: 2rem 0;
}

.actions .next {
  float: right;
  margin-bottom: 3rem;
}
</style>
