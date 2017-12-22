<template>
  <div class="results">
    <h1>Resultados</h1>
    <p>Aquí irá una explicación sobre lo que acabas de hacer.</p>
    <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
    Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat.
    Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit
    amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
    <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci
    luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
    <table>
      <tr>
        <th class="th-column">Valor<span class="inner">Grupo&nbsp;de&nbsp;interés</span></th>
        <th class="th-row">Dignidad humana</th>
        <th class="th-row">Solidaridad y justicia</th>
        <th class="th-row">Sostenibilidad medioambiental</th>
        <th class="th-row">Transparencia y participación democrática</th>
      </tr>
      <tr>
        <th class="th-column">A: Proveedores</th>
        <td class="th-column">A1: Dignidad humana en la cadena de suministro<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">A2 Justicia y solidaridad en la cadena de suministro<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">A3 Sostenibilidad medioambiental en la cadena de suministro<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">A4 Transparencia y participación democrática en la cadena de suministro<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
      </tr>
      <tr>
        <th class="th-column">B: Propietarios y proveedores financieros</th>
        <td class="th-column">B1 Actitud ética en la gestión de recursos fnancieros<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">B2 Actitud solidaria en la gestión de recursos financieros<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">B3 Inversiones financieras sostenibles y uso de los recursos fnancieros<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">B4 Propiedad y participación democrática<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
      </tr>
      <tr>
        <th class="th-column">C: Trabajadores</th>
        <td class="th-column">C1 Dignidad humana en el puesto de trabajo<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">C2 Formalidad de los contratos de trabajo<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">C3 Promoción de la responsabilidad medioambiental de los trabajadores<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">C4 Transparencia y participación democrática interna<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
      </tr>
      <tr>
        <th class="th-column">D: Clientes y otras empresas</th>
        <td class="th-column">D1 Actitud ética con los clientes<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">D2 Cooperación y solidaridad con otras empresas<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">D3 Impacto ambiental del uso y de la gestión de residuos de los productos y servicios<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">D4 Participación de los clientes y transparencia de producto<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
      </tr>
      <tr>
        <th class="th-column">E: Entorno social</th>
        <td class="th-column">E1 Propósito e impacto positivo de los productos y servicios<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">E2 Contribución a la comunidad<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">E3 Reducción del impacto medioambiental<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
        <td class="th-column">E4 Transparencia y participación democrática del entorno social<span class="value"><span class="number">{{ Math.round(Math.random() * 100) }}</span></span></td>
      </tr>
    </table>
    <p>Y la explicación de la matriz resultante</p>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit
    amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
    <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci
    luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
  </div>
</template>

<script>
export default {
  name: 'assessmentResults'
}
</script>

<style scoped>
.results {
  color: #4d9899;
}

table {
  margin: 3rem;
  color: #8a6d3b;
}

th, td {
  border: 1px solid #8a6d3b;
  padding: 1rem;
}

th.th-column {
  text-align: right;
  text-transform: uppercase;
}

th.th-row {
  text-align: left;
  text-transform: uppercase;
}

th .inner {
  display: block;
  text-align: right;
}

td {
  vertical-align: top;
  position: relative;
  padding-bottom: 2rem;
  color: #000;
}

td .value {
  display: block;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

td .number {
  background-color: #e9f2f2ff;
  border: 1px solid #4d9899;
  padding: 0.5rem;
  width: 3rem;
}
</style>
