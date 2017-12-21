<template>
  <div>
    <div class="container">
      <div class="row">
        <main-header></main-header>
      </div>
    </div>
    <div class="login-container">
      <div class="login-form">
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
          <b-button type="submit" variant="info">Entrar</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  name: 'login',
  components: {
    MainHeader
  },
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
.login-container {
  background-color: #4d9899;
  padding: 5rem;
}

.login-form {
  background-color: #fff;
  color: #999968;
  width: 800px;
  margin: 0 auto;
  padding: 3rem;
}
</style>
