<template>
  <div>
    <h1>Login</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="emailGroup"
                    label="Introduce tu correo electrónico:"
                    label-for="email"
                    description="No será compartido con nadie de fuera.">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="nombre@proveedor.es">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordGroup"
                    label="Introduce tu contraseña:"
                    label-for="password"
                    description="Intenta que no sea una contraseña obvia.">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Entrar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$router.push('/organization')
    }
  }
}
</script>

<style scoped>
</style>
