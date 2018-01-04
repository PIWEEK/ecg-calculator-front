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
                        description="Contacta con la organización para conseguir una contraseña.">
            <b-form-input id="password"
                          type="password"
                          v-model="form.password"
                          required>
            </b-form-input>
          </b-form-group>
          <div v-if="invalidUser" class="invalid-user">Usuario o contraseña incorrecta</div>
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
      },
      invalidUser: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (this.form.email === 'madrid@economia-del-bien-comun.es' && this.form.password === 'ebc') {
        this.$router.push('/organization')
      } else {
        this.invalidUser = true
      }
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

.invalid-user {
  color: red;
  margin-bottom: 1rem;
}
</style>
