<template>
  <div>
    <h1>A - Proveedores</h1>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion1 variant="info">A1 - Dignidad humana en la cadena de suministro</b-btn>
        </b-card-header>
        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="aspect-title">A1.1 - Condiciones de trabajo e impacto social en la cadena de suministro</p>
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
            <p class="aspect-title negative">A1.2 - Aspecto negativo: vulneración de la dignidad humana en la cadena de suministro</p>
            <form class="form-horizontal">
              <div class="form-group">
                <label for="weighting" class="col-sm-2 control-label">Ponderación</label>
                <div class="col-sm-3">
                  <select class="form-control" id="weighting" disabled>
                    <option>Muy alta</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baja</option>
                    <option selected>No aplica</option>
                  </select>
                </div>
                <label for="level" class="col-sm-2 control-label">Nivel (0 / -100)</label>
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
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion2 variant="info">A2 - Justicia y solidaridad en la cadena de suministro</b-btn>
        </b-card-header>
        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="card-text">
              Lorem ipsum su puta madre
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion3 variant="info">A3 - Sostenibilidad medioambiental en la cadena de suministro</b-btn>
        </b-card-header>
        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="card-text">
              Lorem ipsum su puta madre
            </p>
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion4 variant="info">A4 - Transparencia y participación democrática en la cadena de suministro</b-btn>
        </b-card-header>
        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="card-text">
              Lorem ipsum su puta madre
            </p>
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div class="actions">
      <router-link class="previous" role="button" :to="{name: 'AssessmentFacts', params: {code: 'E'}}">Volver atrás</router-link>
      <router-link class="btn btn-primary next" role="button" :to="{name: 'AssessmentAspects', params: {code: 'B'}}">Siguiente</router-link>
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
.card {
  margin-top: 3rem;
}

.card:first-child {
  margin-top: 0;
}

.aspect-title {
  font-weight: bold;
  margin: 2rem 0 1rem 0;
}

.aspect-title.negative {
  color: red;
}

textarea {
  resize: vertical;
}

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
