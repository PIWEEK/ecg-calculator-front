<template>
  <div>
    <h1>A - Proveedores</h1>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="weighting" class="col-sm-2 control-label">Ponderación</label>
        <div class="col-sm-3">
          <select class="form-control" id="weighting">
            <option>Muy alta</option>
            <option>Alta</option>
            <option selected>Media</option>
            <option>Baja</option>
            <option>No aplica</option>
          </select>
        </div>
        <label for="level" class="col-sm-2 control-label">Nivel (1-10)</label>
        <div class="col-sm-3">
          <input type="number" class="form-control" id="level" placeholder="0">
        </div>
      </div>
      <div class="form-group">
        <label for="current-status" class="col-sm-2 control-label">Estado actual</label>
        <div class="col-sm-8">
          <textarea class="form-control" id="current-status" rows="3" placeholder="Describe brevemente la situación actual de tu organización en este aspecto" />
        </div>
      </div>
    </form>
    <div class="actions">
      <router-link class="previous" role="button" :to="{name: 'AssessmentInstructions'}">Volver atrás</router-link>
      <router-link class="btn btn-primary next" role="button" :to="{name: 'AssessmentFacts', params: {code: 'B'}}">Siguiente</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assessmentFacts',
  data () {
    return {}
  }
}
</script>

<style scoped>
.actions {
  margin: 2rem 0;
}

.actions .previous {
  float: left;
}
.actions .next {
  float: right;
}
</style>
