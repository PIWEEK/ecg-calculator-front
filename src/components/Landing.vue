<template>
  <div class="landing">
    <img src="../assets/ebc.png" class="logo" />
    <div class="lead">
      <h1>La Calculadora del Bien Común</h1>
      <p>Aquí viene un bonito párrafo indicando lo que mola el Balance del Bien Común,
      para que te animes a hacerte uno o a cargarlo aquí si ya lo tienes.</p>
      <p>Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a
      pellentesque nec, egestas non nisi.Nulla quis lorem ut libero malesuada feugiat.
      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac
      diam sit amet quam vehicula elementum sed sit amet dui.</p>
      <b-button to="/login" size="lg" variant="primary">Empezar</b-button>
    </div>
    <div class="matrix">
      <h2>La Matriz del Bien Común 5.0</h2>
      <img src="../assets/matrix.png" />
      <p>Y aquí otro texto dando más detalles de cómo va la matriz</p>
      <p>Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada.
      Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus.</p>
      <p>Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'landing'
}
</script>

<style scoped>
.landing {
  background-image: url(../assets/diente_leon.jpg);
  background-repeat: no-repeat;
  background-position: top -12rem left 0;
  text-align: center;
}

.logo {
  margin-top: 3rem;
}

.lead {
  color: #4d9899;
  text-align: left;
  margin: 7rem auto;
  width: 800px;
}

h1 {
  margin-top: 1rem;
  font-size: 125%;
  font-weight: bold;
  text-transform: uppercase;
}

h2 {
  color: #fff;
  font-size: 125%;
  font-weight: bold;
  text-transform: uppercase;
}

.matrix {
  background-color: #4d9899;
  padding: 3rem;
}

.matrix img {
  width: 800px;
  border: 2px solid #47888a;
}

.matrix p {
  color: #fff;
  text-align: left;
  margin: 2rem auto;
  width: 800px;
}
</style>
