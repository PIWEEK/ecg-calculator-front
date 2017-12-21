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
            <p class="aspect-title">
              A1.1 - Condiciones de trabajo e impacto social en la cadena de suministro
              <button class="btn toggle-info" v-on:click="toggleInfo('a11')">?</button>
            </p>
            <p class="info" v-if="openInfo['a11']">
              Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
              Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
              Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
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
            <p class="aspect-title negative">
              A1.2 - Aspecto negativo: vulneración de la dignidad humana en la cadena de suministro
              <button class="btn toggle-info" v-on:click="toggleInfo('a12')">?</button>
            </p>
            <p class="info" v-if="openInfo['a12']">
              Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
              Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
              Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
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
            <p class="aspect-title">
              A2.1 - Condiciones de trabajo e impacto social en la cadena de suministro
              <button class="btn toggle-info" v-on:click="toggleInfo('a11')">?</button>
            </p>
            <p class="info" v-if="openInfo['a11']">
              Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
              Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
              Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
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
            <p class="aspect-title negative">
              A2.2 - Aspecto negativo: vulneración de la dignidad humana en la cadena de suministro
              <button class="btn toggle-info" v-on:click="toggleInfo('a12')">?</button>
            </p>
            <p class="info" v-if="openInfo['a12']">
              Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.
              Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
              Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
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
          <b-btn block href="#" v-b-toggle.accordion3 variant="info">A3 - Sostenibilidad medioambiental en la cadena de suministro</b-btn>
        </b-card-header>
        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="card-text">
              Lorem ipsum qué bonito
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
              Lorem ipsum qué bonito
            </p>
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div class="actions">
      <router-link class="previous" role="button" :to="{name: 'AssessmentFacts', params: {slug: 'E'}}">Volver atrás</router-link>
      <router-link class="btn btn-primary next" role="button" :to="{name: 'AssessmentAspects', params: {slug: 'B'}}">Siguiente</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assessmentFacts',
  data () {
    return {
      openInfo: {
        'a11': false,
        'a12': false
      }
    }
  },
  methods: {
    toggleInfo: function (slug) {
      this.openInfo[slug] = !this.openInfo[slug]
    }
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

.toggle-info {
  background-color: #337ab7;
  border-radius: 10px;
  color: #fff;
  font-size: 75%;
  font-weight: bold;
  padding: 0.5rem;
  width: 3rem;
}

.info {
  background-color: #eee;
  padding: 1rem;
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
