<template>
  <div class="landing">
    <img src="../assets/ebc.png" class="logo" />
    <h1>Calculadora del Bien Común</h1>
    <p class="lead">Aquí viene un bonito párrafo indicando lo que mola el Balance del Bien Común,
    para que te animes a hacerte uno o a cargarlo aquí si ya lo tienes.</p>
    <b-button to="/login" size="lg" variant="primary">Empezar</b-button>
    <p><img src="../assets/matrix.png" class="matrix" /></p>
    <p>Y aquí otro texto dando más detalles de cómo va la matriz</p>
    <p>Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada.
    Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus.</p>
    <p>Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
</div>
</template>

<script>
export default {
  name: 'landing'
}
</script>

<style scoped>
.landing {
  text-align: center;
}

.logo {
  margin: 3rem 0;
}

h1 {
  margin-top: 1rem;
}

.matrix {
  width: 500px;
}
</style>
