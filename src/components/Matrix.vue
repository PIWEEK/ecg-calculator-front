<template>
  <div class='container'>
    <div class="row">
      <main-header></main-header>
    </div>
    <div class="row">
      <main-navbar section="matrix"></main-navbar>
    </div>
    <div class="row">
      <h1>Matrix</h1>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainNavbar from '@/components/MainNavbar'

export default {
  name: 'matrix',
  components: {
    MainHeader,
    MainNavbar
  }
}
</script>

<style scoped>
</style>
